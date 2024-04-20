/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    let farmland = [];
    for (let y = 0; y < land.length; y++) {
        for (let x = 0; x < land[0].length; x++) {
            if (land[y][x] === 1 && (y === 0 || land[y-1][x] === 0) && (x === 0 || land[y][x-1] === 0)) {
                let currLand = [y, x];
                let tempY = y;
                let tempX = x;
                while (tempY < land.length && land[tempY][x] === 1) {
                    tempY++;
                }
                while (tempX < land[y].length && land[y][tempX] === 1) {
                    tempX++;
                }
                currLand.push(tempY - 1);
                currLand.push(tempX - 1);
                farmland.push(currLand);
            }
        }
    }
    return farmland;
};