/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    if (Math.max(...height) === Math.min(...height)) {
        return 0;
    }

    let water = new Array(height.length);
    let leftHeight = 0;
    let rightHeight = Math.max(...height);
    let runningSum = 0;

    for (let i = 0; i < water.length; i++) {
        if (i === 0 || i === water.length - 1) {
            water[i] = 0;
        }
        else {
            water[i] = Math.max(Math.min(rightHeight - height[i], leftHeight - height[i]), 0);
        }

        runningSum += water[i];

        if (height[i] > leftHeight) {
            leftHeight = height[i];
        }
        if (height[i] === rightHeight) {
            rightHeight = Math.max(...height.slice(i+1));
        }
    }

    return runningSum;
    
};