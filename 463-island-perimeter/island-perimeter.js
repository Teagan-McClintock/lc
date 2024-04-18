/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 1) {
                if (y === grid.length - 1 || grid[y+1][x] === 0) {
                    perimeter++;
                }
                if (y === 0 || grid[y-1][x] === 0) {
                    perimeter++;
                }
                if (x === grid[y].length - 1 || grid[y][x+1] === 0) {
                    perimeter++;
                }
                if (x === 0 || grid[y][x-1] === 0) {
                    perimeter++;
                }
            }
        }
    }
    return perimeter;
};