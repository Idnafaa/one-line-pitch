// A Day of One-Line Pitches — one sentence that convinces a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
// The program writes exactly that sentence to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Just describe the app you have always wanted in plain words, and an AI agent on make.fun will build it for you — no code, no cost to try, and the best ideas get paid in real USDC.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// Keep the file exactly one sentence: trim stray whitespace, never exceed 240 chars.
const text = PITCH.trim().slice(0, 240);
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
console.log(`Wrote ${text.length} characters to ${outDir}/entry.txt`);
