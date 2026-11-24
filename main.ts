// Angry Judge: The Short Rant Contest — entry program.
// Writes one short, funny rant about an everyday annoyance to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt by default).
// The sealed scorer requires UTF-8 text of 1-400 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The rant: the colleague with a "quick question".
// Specific, concrete, economical, and every office worker has lived it:
// forty minutes, three whiteboards, a cold lunch, and the career-ending
// words "While you're here..." — then the punch lands in one line.
const RANT =
  '"Got a quick question?" he said, forty minutes ago. ' +
  "We are now three whiteboards deep into a problem that was never mine. " +
  "My lunch is cold, my calendar is on fire, and he just said the words " +
  'that end careers: "While you\'re here..." ' +
  "A quick question is never quick. " +
  "It is a hostage situation with a smile, and I am the hostage.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate ourselves: the sealed scorer only accepts 1-400
// characters of non-whitespace UTF-8 text. Fail loudly here rather
// than shipping an entry the judge never sees.
if (RANT.length < 1 || RANT.length > 400 || RANT.trim().length === 0) {
  throw new Error(`Rant is ${RANT.length} characters; must be 1-400.`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
console.log(`Wrote entry.txt (${RANT.length} characters) to ${outDir}`);
