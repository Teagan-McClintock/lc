/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => a - b);

    const output = new Array(deck.length);

    let outputIndex = 0;
    let skip = false;

    for (let deckIndex = 0; deckIndex < deck.length; deckIndex++) {
        let placed = false;
        while (!placed) {
            if (!output[outputIndex] && !skip) {
                output[outputIndex] = deck[deckIndex];
                skip = true;
                placed = true;
            }
            else if (skip && !output[outputIndex]) {
                skip = false;
            }
            outputIndex = (outputIndex + 1) % (output.length);
        }
    }

    return output;
};