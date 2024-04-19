/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    function fillIsland(y, x) {
        if (grid[y][x] === '1') {
            grid[y][x] = '-';
            if (y > 0) {
                fillIsland(y - 1, x);
            }
            if (x > 0) {
                fillIsland(y, x - 1);
            }
            if (y < grid.length - 1) {
                fillIsland(y + 1, x);
            }
            if (x < grid[y].length - 1) {
                fillIsland(y, x + 1);
            }
            return 1;
        }
        return 0;
    }

    let runningSum = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            runningSum += fillIsland(y, x);
        }
    }

    return runningSum;
    
};