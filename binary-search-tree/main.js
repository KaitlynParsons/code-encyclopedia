"use strict";
exports.__esModule = true;
exports.postOrder = exports.preOrder = exports.inOrder = exports.findMax = exports.findMin = exports.remove = exports.find = exports.insert = void 0;
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
            // Recur until right most undefined node is found
            exports.insert(root.right, value);
        }
    }
    // If value is less than root value, then insert left
    if (value < root.value) {
        if (root.left === undefined) {
            root.left = { value: value, left: undefined, right: undefined };
        }
        else {
            // Recur until left most undefined node is found
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
        // If value less than root, then set root to left node
        if (value < root.value)
            root = root.left;
        // If value greater than root, then set root to right node
        else if (value > root.value)
            root = root.right;
        // Otherwise set found to true and exit while loop
        else
            found = true;
    }
    // If nothing found, return undefined
    if (!found)
        return undefined;
    // Return node
    return root;
};
exports.find = find;
/**
 * Removes a value from the Binary Tree
 * @param root the root node
 * @param value the value to remove
 * @returns TreeNode
 */
var remove = function (root, value) {
    // Undefined guard
    if (!root)
        return undefined;
    // If value is less than root value,
    // then recur left utill value is found and return root
    else if (value < root.value) {
        root.left = exports.remove(root.left, value);
        return root;
    }
    // If value is greater than root value,
    // then recur right utill value is found and return root
    else if (value > root.value) {
        root.right = exports.remove(root.right, value);
        return root;
    }
    // Otherwise remove this node
    else {
        // Remove node with no children
        if (root.left === undefined && root.right === undefined) {
            root = undefined;
            return root;
        }
        // Remove node with one child on the right
        if (root.left === undefined) {
            root = root.right;
            return root;
        }
        // Remove node with one child on the left
        if (root.right === undefined) {
            root = root.left;
            return root;
        }
        // Remove node with two children
        var minNode = exports.findMin(root.right);
        root.value = minNode.value;
        root.right = exports.remove(root.right, minNode.value);
        return root;
    }
};
exports.remove = remove;
/**
 * Finds the minimum node in tree searching starts from given node
 * @param node
 * @returns
 */
var findMin = function (node) {
    // If left of a node is undefined then it must be minimum node
    if (node.left === undefined) {
        return node;
    }
    else {
        // Recur until minimum is found
        return exports.findMin(node.left);
    }
};
exports.findMin = findMin;
/**
 * Finds the maximum node in tree searching starts from given node
 * @param node
 * @returns
 */
var findMax = function (node) {
    // If right of a node is undefined then it must be maximum node
    if (node.right === undefined) {
        return node;
    }
    else {
        // Recur until maximum is found
        return exports.findMax(node.right);
    }
};
exports.findMax = findMax;
/**
 * Performs in order traversal of a tree
 * @param node node to traverse
 */
var inOrder = function (node) {
    if (node !== undefined) {
        exports.inOrder(node.left);
        console.log(node.value);
        exports.inOrder(node.right);
    }
};
exports.inOrder = inOrder;
/**
 * Performs pre order traversal of a tree
 * @param node node to traverse
 */
var preOrder = function (node) {
    if (node !== undefined) {
        console.log(node.value);
        exports.preOrder(node.left);
        exports.preOrder(node.right);
    }
};
exports.preOrder = preOrder;
/**
 * Performs post order traversal of a tree
 * @param node
 */
var postOrder = function (node) {
    if (node !== undefined) {
        exports.postOrder(node.left);
        exports.postOrder(node.right);
        console.log(node.value);
    }
};
exports.postOrder = postOrder;
/**
 * TESTS
 */
var root = { value: 8 };
// Test insert
exports.insert(root, 5);
exports.insert(root, 10);
exports.insert(root, 3);
exports.insert(root, 25);
exports.insert(root, 13);
console.log(JSON.stringify(root, null, 2));
var foundNode = undefined;
// Test Find
foundNode = exports.find(undefined, 25);
console.log("Node Found: " + JSON.stringify(foundNode, null, 2));
foundNode = exports.find(root, 2);
console.log("Node Found: " + JSON.stringify(foundNode, null, 2));
foundNode = exports.find(root, 25);
console.log("Node Found: " + JSON.stringify(foundNode, null, 2));
// Test findMin
foundNode = exports.findMin(root);
console.log("Min Node Found: " + JSON.stringify(foundNode, null, 2));
// Test findMax
foundNode = exports.findMax(root);
console.log("Max Node Found: " + JSON.stringify(foundNode, null, 2));
// Test traversals
console.log('-------');
exports.inOrder(root);
console.log('-------');
exports.preOrder(root);
console.log('-------');
exports.postOrder(root);
console.log('-------');
// Test remove
exports.remove(root, 10);
console.log(JSON.stringify(root, null, 2));
