// Function to deploy using data from options object
// Where, Options: { dir: String, message: String }
function deploy(options) {
  const childProcess = require("child_process");

  childProcess.execSync(`git add ${options.dir}`);

  // Must use double quotes for the commit message, else will fail in powershell
  childProcess.execSync(`git commit -m "${options.message}"`);

  // Deploy by pushing the commit to github
  childProcess.execSync("git push");
}

// Returns CLI argument value or the given default value
function getArgWithDefault(args, argString, defaultValue) {
  const argIndex = args.findIndex((arg) => arg === `--${argString}`);
  return argIndex === -1 ? defaultValue : args[argIndex + 1];
}

// Get CLI arguments after `node` and current file's name
const args = process.argv.slice(2);

deploy(
  // Get options values from CLI arguments if available
  {
    // ./docs is the default github pages directory choice if not using the repo root
    dir: getArgWithDefault(args, "dir", "./docs"),

    message: getArgWithDefault(
      args,
      "message",
      "[Github pages deployment commit]"
    ),
  }
);
