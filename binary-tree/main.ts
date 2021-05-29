interface TreeNode {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
}

/**
 * Inserts a new value to the Binary Tree
 * @param root the root node to insert to
 * @param value value to insert
 * @returns TreeNode
 */
export const insert = (root: TreeNode, value: number): TreeNode => {
    // Undefined guard
    if (root === undefined) return undefined;

    // If value is greater than root value, then insert right
    if (value > root.value) {
        if (root.right === undefined) {
            root.right = {value, left: undefined, right: undefined};
        } else {
            insert(root.right, value);
        }
    } 

    // If value is less than root value, then insert left
    if (value < root.value) {
        if (root.left === undefined) {
            root.left = {value, left: undefined, right: undefined};
        } else {
            insert(root.left, value);
        }
    }
    return root;
}

/**
 * Finds a value in the Binary Tree
 * @param root the root node
 * @param value value to find
 * @returns TreeNode
 */
export const find = (root: TreeNode, value: number): TreeNode => {
    // Undefined guard
    if (!root) return undefined;

    let found = false;
    // Loop while we have root and found is false
    while (root && !found) {
        if (value < root.value) root = root.left;
        else if (value > root.value) root = root.right;
        else found = true;
    }

    // If nothing found, return undefined
    if (!found) return undefined;
    
    console.log(`NODE FOUND: ${JSON.stringify(root, null, 2)}`);
    return root;
}

let root: TreeNode = { value: 8 };

insert(root, 5);
insert(root, 10);
insert(root, 3);
insert(root, 25)
insert(root, 13);

console.log(JSON.stringify(root, null, 2));

find(undefined, 25);
find(root, 2);
find(root, 25);