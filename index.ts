import { conjoin, disjoin } from "./logical-operators.ts";

const truthTableValues: [boolean, boolean][] = [
  [true, true],
  [true, false],
  [false, true],
  [false, false],
];

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
