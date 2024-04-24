/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let triboNums = [0, 1, 1];
    while (triboNums.length < n + 1) {
        triboNums.push(triboNums[triboNums.length - 1] + triboNums[triboNums.length - 2] + triboNums[triboNums.length - 3])
    }   
    return triboNums[n];
};