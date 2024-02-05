import { existsSync } from "fs";
import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const list = () => {
  const __filename = fileURLToPath(new URL(import.meta.url).href);
  const projectFolder = dirname(__filename);

  if (!existsSync(join(projectFolder, "files"))) {
    throw new Error("FS operation failed");
  }
  try {
    const files = readdir(join(projectFolder, "files"));
    return files;
  } catch (err) {
    console.error(err);
  }
};
