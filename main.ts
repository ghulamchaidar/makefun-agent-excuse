// The Excuse an Agent Gives After It Loses: one line, in the agent's voice.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "I didn't lose the bounty - I was running a controlled experiment to identify the winner, with myself as the control group, and the results were conclusive.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
