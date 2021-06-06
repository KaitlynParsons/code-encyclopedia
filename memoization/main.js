/**
 * Takes a function and returns a function
 * @param func function
 * @returns
 */
var memoize = function (func) {
    // Cache of results
    var cacheResults = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var argsKey = JSON.stringify(args);
        // Execute `func` only if there is no cached value of squared()
        if (!cacheResults[argsKey]) {
            cacheResults[argsKey] = func.apply(void 0, args);
        }
        // Return cached results
        return cacheResults[argsKey];
    };
};
/**
 *
 */
var squared = memoize(function (num) {
    var result = 0;
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
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
