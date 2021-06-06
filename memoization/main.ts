interface cached {
  [key: string]: number;
}

/**
 * Takes a function and returns a function
 * @param func function
 * @returns
 */
const memoize = (func: Function): Function => {
  // Cache of results
  const cacheResults: cached = {};
  return (...args: unknown[]): unknown => {
    const argsKey = JSON.stringify(args);
    // Execute `func` only if there is no cached value of squared()
    if (!cacheResults[argsKey]) {
      cacheResults[argsKey] = func(...args);
    }
    // Return cached results
    return cacheResults[argsKey];
  };
};

/**
 * Find the squared value of a number through memoization
 */
const squared = memoize((num: number): number => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
});

console.time("First call");
console.log(squared(9467));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(squared(9467));
console.timeEnd("Second call");

console.time("Third call");
console.log(squared(9467));
console.timeEnd("Third call");
