import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = process.argv[2] ?? "dist";
const PORT = 4173;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

createServer(async (req, res) => {
  const requestPath = normalize(req.url === "/" ? "/index.html" : req.url).replace(/^(\.\.[/\\])+/, "");

  try {
    const data = await readFile(join(ROOT, requestPath));
    res.writeHead(200, { "Content-Type": MIME_TYPES[extname(requestPath)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
}).listen(PORT, () => {
  console.log(`Serving ${ROOT}/ at http://localhost:${PORT}`);
});
