const fizzBuzzRules = [
  { number: 3, word: "Fizz" },
  { number: 5, word: "Buzz" }
];

const limit = 100;

function fizzBuzz(rules, limit) {
  for (let i = 1; i <= limit; i++) {
    let output = "";
    for (let rule of rules) {
      if (i % rule.number === 0) {
        output += rule.word;
      }
    }
    console.log(output || i);
  }
}
fizzBuzz(fizzBuzzRules, limit);