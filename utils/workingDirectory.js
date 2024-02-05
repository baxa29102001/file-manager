import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import { homedir } from "os";

export const workingDirectory = () => {
  const __fileName = fileURLToPath(new URL(import.meta.url).href);
  const __dirname = dirname(__fileName);

  return homedir();
};
