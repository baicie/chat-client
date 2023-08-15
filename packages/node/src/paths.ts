import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import path from 'node:path';

export const __dirname = fileURLToPath(new URL(".", import.meta.url));
export const require = createRequire(import.meta.url);

export const rootPath = path.resolve(__dirname, "..",'..','..');

export const pkgsPath = path.resolve(rootPath, "packages"); 