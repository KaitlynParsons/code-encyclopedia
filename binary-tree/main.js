"use strict";
exports.__esModule = true;
exports.find = exports.insert = void 0;
/**
 * Inserts a new value to the Binary Tree
 * @param root the root node to insert to
 * @param value value to insert
 * @returns TreeNode
 */
var insert = function (root, value) {
    // Undefined guard
    if (root === undefined)
        return undefined;
    // If value is greater than root value, then insert right
    if (value > root.value) {
        if (root.right === undefined) {
            root.right = { value: value, left: undefined, right: undefined };
        }
        else {
            exports.insert(root.right, value);
        }
    }
    // If value is less than root value, then insert left
    if (value < root.value) {
        if (root.left === undefined) {
            root.left = { value: value, left: undefined, right: undefined };
        }
        else {
            exports.insert(root.left, value);
        }
    }
    return root;
};
exports.insert = insert;
/**
 * Finds a value in the Binary Tree
 * @param root the root node
 * @param value value to find
 * @returns TreeNode
 */
var find = function (root, value) {
    // Undefined guard
    if (!root)
        return undefined;
    var found = false;
    // Loop while we have root and found is false
    while (root && !found) {
        if (value < root.value)
            root = root.left;
        else if (value > root.value)
            root = root.right;
        else
            found = true;
    }
    // If nothing found, return undefined
    if (!found)
        return undefined;
    console.log("NODE FOUND: " + JSON.stringify(root, null, 2));
    return root;
};
exports.find = find;
var root = { value: 8 };
exports.insert(root, 5);
exports.insert(root, 10);
exports.insert(root, 3);
exports.insert(root, 25);
exports.insert(root, 13);
console.log(JSON.stringify(root, null, 2));
exports.find(undefined, 25);
exports.find(root, 3);
exports.find(root, 25);
