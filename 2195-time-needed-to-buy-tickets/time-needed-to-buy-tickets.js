/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let runningTotal = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            runningTotal += Math.min(tickets[i], tickets[k]);
        }
        else {
            runningTotal += Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return runningTotal;
    
};