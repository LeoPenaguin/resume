import { execSync } from "node:child_process";
import { cpSync, mkdirSync, rmSync } from "node:fs";

const STATIC_FILES = [
  "index.html",
  "app.js",
  "CNAME",
  "favicon.svg",
  "me-256.webp",
  "profile-photo.jpg",
  "robots.txt",
  "sitemap.xml",
];

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");

for (const file of STATIC_FILES) {
  cpSync(file, `dist/${file}`);
}

cpSync("projects", "dist/projects", { recursive: true });

execSync("npx @tailwindcss/cli -i src/styles.css -o dist/styles.css --minify", {
  stdio: "inherit",
});

console.log("Built to dist/");
