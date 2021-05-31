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
      root.right = { value, left: undefined, right: undefined };
    } else {
      // Recur until right most undefined node is found
      insert(root.right, value);
    }
  }

  // If value is less than root value, then insert left
  if (value < root.value) {
    if (root.left === undefined) {
      root.left = { value, left: undefined, right: undefined };
    } else {
      // Recur until left most undefined node is found
      insert(root.left, value);
    }
  }
  return root;
};

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
    // If value less than root, then set root to left node
    if (value < root.value) root = root.left;
    // If value greater than root, then set root to right node
    else if (value > root.value) root = root.right;
    // Otherwise set found to true and exit while loop
    else found = true;
  }

  // If nothing found, return undefined
  if (!found) return undefined;
  // Return node
  return root;
};

/**
 * Removes a value from the Binary Tree
 * @param root the root node
 * @param value the value to remove
 * @returns TreeNode
 */
export const remove = (root: TreeNode, value: number): TreeNode => {
  // Undefined guard
  if (!root) return undefined;
  // If value is less than root value,
  // then recur left utill value is found and return root
  else if (value < root.value) {
    root.left = remove(root.left, value);
    return root;
  }

  // If value is greater than root value,
  // then recur right utill value is found and return root
  else if (value > root.value) {
    root.right = remove(root.right, value);
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
    const minNode = findMin(root.right);
    root.value = minNode.value;
    root.right = remove(root.right, minNode.value);
    return root;
  }
};

/**
 * Finds the minimum node in tree searching starts from given node
 * @param node
 * @returns
 */
export const findMin = (node: TreeNode): TreeNode => {
  // If left of a node is undefined then it must be minimum node
  if (node.left === undefined) {
    return node;
  } else {
    // Recur until minimum is found
    return findMin(node.left);
  }
};

/**
 * Finds the maximum node in tree searching starts from given node
 * @param node
 * @returns
 */
export const findMax = (node: TreeNode): TreeNode => {
  // If right of a node is undefined then it must be maximum node
  if (node.right === undefined) {
    return node;
  } else {
    // Recur until maximum is found
    return findMax(node.right);
  }
};

/**
 * Performs in order traversal of a tree
 * @param node node to traverse
 */
export const inOrder = (node: TreeNode): void => {
    if (node !== undefined) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}

/**
 * Performs pre order traversal of a tree
 * @param node node to traverse
 */
export const preOrder = (node: TreeNode): void => {
    if (node !== undefined) {
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}

/**
 * Performs post order traversal of a tree
 * @param node 
 */
export const postOrder = (node: TreeNode): void => {
    if (node !== undefined) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}


/**
 * TESTS
 */
let root: TreeNode = { value: 8 };

// Test insert
insert(root, 5);
insert(root, 10);
insert(root, 3);
insert(root, 25);
insert(root, 13);
console.log(JSON.stringify(root, null, 2));

let foundNode: TreeNode = undefined;
// Test Find
foundNode = find(undefined, 25);
console.log(`Node Found: ${JSON.stringify(foundNode, null, 2)}`);
foundNode = find(root, 2);
console.log(`Node Found: ${JSON.stringify(foundNode, null, 2)}`);
foundNode = find(root, 25);
console.log(`Node Found: ${JSON.stringify(foundNode, null, 2)}`);

// Test findMin
foundNode = findMin(root);
console.log(`Min Node Found: ${JSON.stringify(foundNode, null, 2)}`);

// Test findMax
foundNode = findMax(root);
console.log(`Max Node Found: ${JSON.stringify(foundNode, null, 2)}`);

// Test traversals
console.log('-------');
inOrder(root);
console.log('-------');
preOrder(root);
console.log('-------');
postOrder(root);
console.log('-------');

// Test remove
remove(root, 10);
console.log(JSON.stringify(root, null, 2));
