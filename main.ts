// One Line, One Laugh — make.fun entry
// Writes a single funny line (1-200 chars, one line) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
//
// Revision 3: final polish - a full stop after "stop" gives the joke a beat
// before the escalation, and "It asked" reads cleaner than "so it asked".
// (Revision 2 sharpened the middle beat: "confirm the confirmation" is a
// funnier escalation than "paused to ask if I was sure".)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my agent to stop. It asked me to confirm, then asked me to confirm the confirmation, and finished the job out of respect for my indecision.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
