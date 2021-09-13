import { conjoin, disjoin, equate, exclusivelyDisjoin, imply } from "./logical-operators.ts";

const truthTableValues: [boolean, boolean][] = [
  [true, true],
  [true, false],
  [false, true],
  [false, false],
];

// I find it kind of cool how you made a function to print the outline
// of the table in the way we would write it on paper.
// Not only that but I like how you have more than just one program
// in this repository. It looks like you did an excellent job!

function printTruthTable(operator: (p: boolean, q: boolean) => boolean, symbol: string) {
  console.log(` p │ q ║ p${symbol}q`);
  console.log("───┼───╫─────");
  for (const [p, q] of truthTableValues) {
    console.log(` ${p ? "T" : "F"} │ ${q ? "T" : "F"} ║  ${operator(p, q) ? "T" : "F"}`);
  }
}

printTruthTable(conjoin, "∧");
console.log();
printTruthTable(disjoin, "∨");
console.log();
printTruthTable(exclusivelyDisjoin, "⊕");
console.log();
printTruthTable(imply, "⊃");
console.log();
printTruthTable(equate, "≡");
