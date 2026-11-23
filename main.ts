// Office joke entry: one line, under 200 characters, written to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The punchline is the meeting nobody scheduled but everybody attended.
const joke =
  "My boss said AI will replace us. The AI asked for a meeting to discuss it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke);
console.log(joke);
