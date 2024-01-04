const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (inputA) => {
  rl.question("", (inputB) => {
    rl.question("", (inputC) => {
      const a = parseInt(inputA);
      const b = parseInt(inputB);
      const c = parseInt(inputC);
      const x = (c * c - b) / a;

      if (c < 0 || (a === 0 && b !== c * c) || (a === 0 && c * c - b !== 0)) {
        console.log("NO SOLUTION");
      } else if (a === 0 && b === 0 && c === 0) {
        console.log("MANY SOLUTIONS");
      } else {
        console.log(x);
      }

      rl.close();
    });
  });
});
