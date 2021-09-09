This repository contains a solution to computer project 1 on page 119 of *Discrete Mathematics and Its Applications
<small>8th Edition</small>*

Recommended IDE: [VS Code](https://code.visualstudio.com/)

Recommended TypeScript runtime: [Deno](https://deno.land/)

To run print results:
```
deno run index.ts
```

To run tests
```
deno test
```

sample output
```
 p │ q ║ p∧q
───┼───╫─────
 T │ T ║  T
 T │ F ║  F
 F │ T ║  F
 F │ F ║  F

 p │ q ║ p∨q
───┼───╫─────
 T │ T ║  T
 T │ F ║  T
 F │ T ║  T
 F │ F ║  F

 p │ q ║ p⊕q
───┼───╫─────
 T │ T ║  F
 T │ F ║  T
 F │ T ║  T
 F │ F ║  F

 p │ q ║ p⊃q
───┼───╫─────
 T │ T ║  T
 T │ F ║  F
 F │ T ║  T
 F │ F ║  T

 p │ q ║ p≡q
───┼───╫─────
 T │ T ║  T
 T │ F ║  F
 F │ T ║  F
 F │ F ║  T
 ```