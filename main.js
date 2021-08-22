const childProcess = require("child_process");

// Add ./docs which is the build output directory
childProcess.execSync("git add ./docs");

// Must use double quotes for the commit message, else will fail in powershell
childProcess.execSync('git commit -m "[Github pages deployment commit]"');

// Deploy by pushing the commit to github
childProcess.execSync("git push");
