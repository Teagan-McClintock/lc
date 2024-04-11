/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let newLength = num.length - k;

    if (newLength === 0 || num === "0") {
        return "0";
    }

    let newNum = num;
    let currIdx = 0;
    let deletions = 0;
    let currDeletions = 0;

    while (deletions < k) {
        if(newNum[currIdx + 1]) {
            if (newNum[currIdx] > newNum[currIdx + 1]) {
                newNum = newNum.slice(0, currIdx).concat(newNum.slice(currIdx + 1));
                deletions++;
                currDeletions++;
                if (currIdx > 0) {
                    currIdx = currIdx - 1;
                }
            }
            else {
                currIdx++;
            }
        }
        else {
            if (currDeletions === 0) {
                break;
            }
            currDeletions = 0;
            currIdx = 0;
        }
    }

    if (deletions < k) {
        newNum = newNum.slice(0, newNum.length - k + deletions);
    }

    while (newNum.startsWith("0")) {
        newNum = newNum.slice(1);
    }
    return newNum.length === 0 ? "0" : newNum;
};