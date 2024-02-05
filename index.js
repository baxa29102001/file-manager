import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parseArgs } from "./utils/parseArgs.js";
import { workingDirectory } from "./utils/workingDirectory.js";
import { list } from "./utils/listFilesAndDirectories.js";

const rl = readline.createInterface({ input, output });

const userName = parseArgs("username");

console.log(`Welcome to the File Manager, ${userName}!`);
console.log("You are currently in " + workingDirectory());
rl.prompt();
rl.on("line", (input) => {
  if (input.trim().toLowerCase() === ".exit") {
    rl.close();
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  } else {
    console.log(process.cwd());
    rl.prompt();
  }
});
rl.on("line", (input) => {
  const inputWords = input.trim().split(" ");
  if (inputWords.includes("cd")) {
    try {
      process.chdir(workingDirectory() + inputWords[1]);
    } catch (error) {
      console.log("no such file or directory");
    }
  }
});

rl.on("SIGINT", () => {
  rl.close();

  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});
