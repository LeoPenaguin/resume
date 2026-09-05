import { spawn } from "node:child_process";

// Dev mode serves the project root directly (not dist/) so edits to index.html
// or app.js are reflected on refresh with zero copy/build step. Tailwind writes
// styles.css straight into the root and rebuilds on every change.
const tailwind = spawn(
  "npx",
  ["@tailwindcss/cli", "-i", "src/styles.css", "-o", "styles.css", "--watch"],
  { stdio: "inherit" },
);

const server = spawn("node", ["scripts/serve.mjs", "."], { stdio: "inherit" });

const shutdown = () => {
  tailwind.kill();
  server.kill();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
