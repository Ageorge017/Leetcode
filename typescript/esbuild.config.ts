import { build } from "esbuild";

build({
  entryPoints: ["./index.ts"], // Replace with the file you want to test
  outfile: "./build/output.js",
  bundle: true,
  minify: false,
  sourcemap: true,
  platform: "node",
  target: "esnext",
  treeShaking: true,
  logLevel: "info",
}).catch(() => process.exit(1));
