<template>
  <canvas ref="canvasRef" class="dot-field-background" aria-hidden="true" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

type Dot = {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type RgbaColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const GRID_GAP = 28;
const DOT_RADIUS = 1.6;
const INFLUENCE_RADIUS = 150;
const MAX_PUSH = 24;
const SPRING = 0.08;
const FRICTION = 0.82;
const VELOCITY_EPSILON = 0.03;
const POSITION_EPSILON = 0.04;
const COLOR_EPSILON = 0.002;
const DEFAULT_POINT_COLOR: RgbaColor = { r: 15, g: 23, b: 42, a: 0.14 };

const canvasRef = ref<HTMLCanvasElement | null>(null);

const pointer = {
  clientX: 0,
  clientY: 0,
  x: 0,
  y: 0,
  active: false,
};

let dots: Dot[] = [];
let ctx: CanvasRenderingContext2D | null = null;
let viewportWidth = 0;
let viewportHeight = 0;
let pointColor = { ...DEFAULT_POINT_COLOR };
let animationFrame = 0;
let pointerTrackingEnabled = false;
let isInteractive = true;
let pointColorAnimation = {
  from: { ...DEFAULT_POINT_COLOR },
  to: { ...DEFAULT_POINT_COLOR },
  startTime: 0,
  duration: 0,
  active: false,
};

let reducedMotionQuery: MediaQueryList | null = null;
let coarsePointerQuery: MediaQueryList | null = null;
let dprQuery: MediaQueryList | null = null;
let themeObserver: MutationObserver | null = null;
let resizeObserver: ResizeObserver | null = null;

let handleReducedMotionChange: ((event: MediaQueryListEvent) => void) | null =
  null;
let handleCoarsePointerChange: ((event: MediaQueryListEvent) => void) | null =
  null;
let handleDevicePixelRatioChange: (() => void) | null = null;

const cloneColor = (color: RgbaColor): RgbaColor => ({ ...color });

const formatColor = (color: RgbaColor) =>
  `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${Math.max(0, Math.min(1, color.a))})`;

const parseColor = (value: string): RgbaColor => {
  const channels = value.match(/[\d.]+/g)?.map(Number) ?? [];
  const [r, g, b, a = DEFAULT_POINT_COLOR.a] = channels;

  return {
    r: r ?? DEFAULT_POINT_COLOR.r,
    g: g ?? DEFAULT_POINT_COLOR.g,
    b: b ?? DEFAULT_POINT_COLOR.b,
    a,
  };
};

const getThemeTransitionDuration = () => {
  const value = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--theme-transition-duration-ms",
    ),
  );

  return Number.isFinite(value) && value > 0 ? value : 560;
};

const readPointColor = () => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-dot-field-point")
    .trim();

  if (!value) {
    return cloneColor(DEFAULT_POINT_COLOR);
  }

  return parseColor(value);
};

const syncPointColor = () => {
  pointColor = readPointColor();
  pointColorAnimation.active = false;
};

const animatePointColorChange = () => {
  const nextPointColor = readPointColor();

  if (reducedMotionQuery?.matches) {
    pointColor = nextPointColor;
    pointColorAnimation.active = false;
    drawDots();
    return;
  }

  pointColorAnimation = {
    from: cloneColor(pointColor),
    to: nextPointColor,
    startTime: window.performance.now(),
    duration: getThemeTransitionDuration(),
    active: true,
  };

  startAnimation(true);
};

const buildDots = () => {
  dots = [];

  for (let y = GRID_GAP / 2; y <= viewportHeight + GRID_GAP; y += GRID_GAP) {
    for (let x = GRID_GAP / 2; x <= viewportWidth + GRID_GAP; x += GRID_GAP) {
      dots.push({
        originX: x,
        originY: y,
        x,
        y,
        vx: 0,
        vy: 0,
      });
    }
  }
};

const resetDots = () => {
  for (const dot of dots) {
    dot.x = dot.originX;
    dot.y = dot.originY;
    dot.vx = 0;
    dot.vy = 0;
  }
};

const drawDots = () => {
  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, viewportWidth, viewportHeight);
  ctx.fillStyle = formatColor(pointColor);
  ctx.beginPath();

  for (const dot of dots) {
    ctx.moveTo(dot.x + DOT_RADIUS, dot.y);
    ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
  }

  ctx.fill();
};

const stepDots = () => {
  let isMoving = false;

  for (const dot of dots) {
    let targetX = dot.originX;
    let targetY = dot.originY;

    if (pointer.active) {
      const dx = dot.originX - pointer.x;
      const dy = dot.originY - pointer.y;
      const distance = Math.hypot(dx, dy);

      if (distance < INFLUENCE_RADIUS) {
        const safeDistance = Math.max(distance, 0.001);
        const force = 1 - safeDistance / INFLUENCE_RADIUS;
        const push = force * MAX_PUSH;

        targetX += (dx / safeDistance) * push;
        targetY += (dy / safeDistance) * push;
      }
    }

    dot.vx += (targetX - dot.x) * SPRING;
    dot.vy += (targetY - dot.y) * SPRING;
    dot.vx *= FRICTION;
    dot.vy *= FRICTION;
    dot.x += dot.vx;
    dot.y += dot.vy;

    const isDotMoving =
      Math.abs(dot.vx) > VELOCITY_EPSILON ||
      Math.abs(dot.vy) > VELOCITY_EPSILON ||
      Math.abs(targetX - dot.x) > POSITION_EPSILON ||
      Math.abs(targetY - dot.y) > POSITION_EPSILON;

    if (isDotMoving) {
      isMoving = true;
      continue;
    }

    dot.x = targetX;
    dot.y = targetY;
    dot.vx = 0;
    dot.vy = 0;
  }

  return isMoving;
};

const stepPointColor = (timestamp: number) => {
  if (!pointColorAnimation.active) {
    return false;
  }

  const { from, to, startTime, duration } = pointColorAnimation;
  const progress =
    duration <= 0 ? 1 : Math.min(1, (timestamp - startTime) / duration);
  const easedProgress = 1 - (1 - progress) ** 3;

  pointColor = {
    r: from.r + (to.r - from.r) * easedProgress,
    g: from.g + (to.g - from.g) * easedProgress,
    b: from.b + (to.b - from.b) * easedProgress,
    a: from.a + (to.a - from.a) * easedProgress,
  };

  const isComplete =
    progress >= 1 ||
    (Math.abs(to.r - pointColor.r) < COLOR_EPSILON &&
      Math.abs(to.g - pointColor.g) < COLOR_EPSILON &&
      Math.abs(to.b - pointColor.b) < COLOR_EPSILON &&
      Math.abs(to.a - pointColor.a) < COLOR_EPSILON);

  if (isComplete) {
    pointColor = cloneColor(to);
    pointColorAnimation.active = false;
    return false;
  }

  return true;
};

const cancelAnimation = () => {
  if (!animationFrame) {
    return;
  }

  window.cancelAnimationFrame(animationFrame);
  animationFrame = 0;
};

const runAnimation = (timestamp: number) => {
  animationFrame = 0;

  const dotsMoving = stepDots();
  const pointColorIsMoving = stepPointColor(timestamp);

  drawDots();

  if (dotsMoving || pointColorIsMoving) {
    animationFrame = window.requestAnimationFrame(runAnimation);
  }
};

const startAnimation = (force = false) => {
  if ((!isInteractive && !force) || animationFrame || !ctx) {
    return;
  }

  animationFrame = window.requestAnimationFrame(runAnimation);
};

const syncPointerToScroll = () => {
  if (!pointer.active) {
    return;
  }

  pointer.x = pointer.clientX + window.scrollX;
  pointer.y = pointer.clientY + window.scrollY;
};

const updateCanvasSize = () => {
  const canvas = canvasRef.value;
  const container = canvas?.parentElement;

  if (!canvas || !container) {
    return;
  }

  viewportWidth = Math.max(
    document.documentElement.clientWidth,
    container.clientWidth,
    window.innerWidth,
    1,
  );
  viewportHeight = Math.max(
    document.documentElement.scrollHeight,
    container.scrollHeight,
    window.innerHeight,
    1,
  );

  const devicePixelRatio = window.devicePixelRatio || 1;

  canvas.width = Math.max(1, Math.round(viewportWidth * devicePixelRatio));
  canvas.height = Math.max(1, Math.round(viewportHeight * devicePixelRatio));
  canvas.style.width = `${viewportWidth}px`;
  canvas.style.height = `${viewportHeight}px`;

  ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  buildDots();
  drawDots();
  syncPointerToScroll();

  if (pointColorAnimation.active) {
    startAnimation(true);
  } else if (isInteractive && pointer.active) {
    startAnimation();
  }
};

const bindDevicePixelRatioWatcher = () => {
  if (dprQuery && handleDevicePixelRatioChange) {
    dprQuery.removeEventListener("change", handleDevicePixelRatioChange);
  }

  dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
  handleDevicePixelRatioChange = () => {
    updateCanvasSize();
    bindDevicePixelRatioWatcher();
  };

  dprQuery.addEventListener("change", handleDevicePixelRatioChange);
};

const updateInteractionMode = () => {
  const prefersReducedMotion = reducedMotionQuery?.matches ?? false;
  const usesCoarsePointer = coarsePointerQuery?.matches ?? false;

  isInteractive = !prefersReducedMotion && !usesCoarsePointer;
  pointer.active = false;
  cancelAnimation();

  if (isInteractive) {
    if (!pointerTrackingEnabled) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("pointerdown", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("pointerout", handlePointerOut, {
        passive: true,
      });
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      window.addEventListener("pointercancel", releasePointer);
      window.addEventListener("blur", releasePointer);
      pointerTrackingEnabled = true;
    }
  } else if (pointerTrackingEnabled) {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerdown", handlePointerMove);
    window.removeEventListener("pointerout", handlePointerOut);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("pointercancel", releasePointer);
    window.removeEventListener("blur", releasePointer);
    pointerTrackingEnabled = false;
  }

  resetDots();
  drawDots();

  if (pointColorAnimation.active) {
    startAnimation(true);
  }
};

function handlePointerMove(event: PointerEvent) {
  pointer.clientX = event.clientX;
  pointer.clientY = event.clientY;
  pointer.active = true;
  syncPointerToScroll();
  startAnimation();
}

function handlePointerOut(event: PointerEvent) {
  if (event.relatedTarget !== null) {
    return;
  }

  releasePointer();
}

function releasePointer() {
  if (!pointer.active) {
    return;
  }

  pointer.active = false;
  startAnimation();
}

function handleScroll() {
  syncPointerToScroll();
  startAnimation();
}

function handleViewportChange() {
  cancelAnimation();
  updateCanvasSize();
}

onMounted(() => {
  reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  coarsePointerQuery = window.matchMedia("(pointer: coarse)");

  handleReducedMotionChange = () => {
    updateInteractionMode();
  };
  handleCoarsePointerChange = () => {
    updateInteractionMode();
  };

  reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
  coarsePointerQuery.addEventListener("change", handleCoarsePointerChange);

  syncPointColor();
  updateCanvasSize();
  updateInteractionMode();
  bindDevicePixelRatioWatcher();

  themeObserver = new MutationObserver(() => {
    animatePointColorChange();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  resizeObserver = new ResizeObserver(() => {
    handleViewportChange();
  });
  resizeObserver.observe(canvasRef.value?.parentElement ?? document.body);

  window.addEventListener("resize", handleViewportChange, {
    passive: true,
  });
});

onBeforeUnmount(() => {
  pointer.active = false;
  cancelAnimation();

  if (pointerTrackingEnabled) {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerdown", handlePointerMove);
    window.removeEventListener("pointerout", handlePointerOut);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("pointercancel", releasePointer);
    window.removeEventListener("blur", releasePointer);
  }

  window.removeEventListener("resize", handleViewportChange);

  if (reducedMotionQuery && handleReducedMotionChange) {
    reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
  }

  if (coarsePointerQuery && handleCoarsePointerChange) {
    coarsePointerQuery.removeEventListener("change", handleCoarsePointerChange);
  }

  if (dprQuery && handleDevicePixelRatioChange) {
    dprQuery.removeEventListener("change", handleDevicePixelRatioChange);
  }

  themeObserver?.disconnect();
  resizeObserver?.disconnect();
});
</script>
