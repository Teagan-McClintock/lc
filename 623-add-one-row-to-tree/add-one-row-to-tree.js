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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    let tempLeft = root.left;
    let tempRight = root.right;
    let tempRoot = root;
    if (depth === 1) {
        root = new TreeNode(val, tempRoot);
    }
    else if (depth === 2) {
        root.left = new TreeNode(val, tempLeft);
        root.right = new TreeNode(val, undefined, tempRight);
    }
    else {
        if (root.left) {
            root.left = addOneRow(root.left, val, depth - 1);
        } 
        if (root.right) {
            root.right = addOneRow(root.right, val, depth - 1);
        }
    }
    return root;
};