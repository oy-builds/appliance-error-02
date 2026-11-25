import * as fs from "node:fs";

// The funniest honest appliance error: a printer, in its own flat voice,
// telling the truth about the one fault every owner recognises.
const line =
  "PAPER JAM: I ate your boarding pass. It was the only copy. I regret nothing.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line + "\n", "utf-8");
