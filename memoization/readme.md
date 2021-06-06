# Memoization
Memoization is a top-down, depth-first, optimization technique of storing previously executed computations. Whenever the program needs the result of these computations, the program will not have to execute that computation again. Instead, it will reuse the result of the previously executed computation. This way the program will not have to repeat expensive computations. An expensive function is a function that takes some time to execute.

### Applications
- Recursive functions.
- Pure functions. A pure function always returns the same value when called.
- Heavy computing functions. Whenever a program has expensive computation, caching the results will significantly increase your program performance.
- Remote API calls. When making an API call repeatedly, using Memoization will save you from making repetitive calls to the server.

### Example
 - [Example Code](./main.ts)