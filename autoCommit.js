const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function execute(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}

rl.question("Enter your commit message: ", (commitMessage) => {
  execute(`git add .`);
  execute(`git commit -m "${commitMessage}"`);
  execute("git push origin main");
  rl.close();
});
