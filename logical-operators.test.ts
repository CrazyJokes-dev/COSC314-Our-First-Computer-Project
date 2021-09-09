import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";

import { conjoin, disjoin } from "./logical-operators.ts";

Deno.test("conjoin()", () => {
  assertEquals(conjoin(true, true), true);
  assertEquals(conjoin(true, false), false);
  assertEquals(conjoin(false, true), false);
  assertEquals(conjoin(false, false), false);
});

Deno.test("disjoin()", () => {
  assertEquals(disjoin(true, true), true);
  assertEquals(disjoin(true, false), true);
  assertEquals(disjoin(false, true), true);
  assertEquals(disjoin(false, false), false);
});
