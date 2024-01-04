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

      if (c < 0 || (a === 0 && (b < 0 || b != c * c))) {
        console.log("NO SOLUTION");
      } else if (a === 0 && b === c * c) {
        console.log("MANY SOLUTIONS");
      } else {
        if ((c * c - b) % a === 0) {
          console.log(x);
        } else console.log("NO SOLUTION");
      }
    });

    rl.close();
  });
});
