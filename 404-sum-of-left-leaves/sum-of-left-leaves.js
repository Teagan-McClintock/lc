/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    return sumLeft(root, false);
};

function sumLeft(node, isLeft) {
    if (node === null) {
        return 0;
    }
    else if (node.left === null && node.right === null && isLeft) {
        return node.val;
    }
    else if (node.left === null && node.right === null) {
        return 0;
    }
    else {
        return sumLeft(node.left, true) + sumLeft(node.right, false);
    }
}