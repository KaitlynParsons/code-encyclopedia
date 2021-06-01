# Binary Search Tree
A Binary Search Tree is a node-based binary tree data structure which has the following properties:
- The left subtree of a node contains only nodes with keys lesser than the node's key.
- The right subtree of a node contains only nodes with keys greater tahn the node's key. 
- The left and right subtree each must also be a binary search tree.

### Applications
- Can be used to implement a simple sorting algorithm, using the traversal methods.
- Often used in search, game logic, autocomplete tasks & graphics.
- Used in many search applications where data is constantly entering/leaving, such as the map and set objects in many languages' libraries.

### Example
 - [Example Code](./main.ts)

### Operations
- Search
  - [find](./main.ts#L45)
  - [findMin](./main.ts#L119)
  - [findMax](./main.ts#L134)
- Insertion
  - [insert](./main.ts#L13)
- Deletion
  - [remove](./main.ts#L72)
- Traversal
  - [inOrder](./main.ts#L148)
  - [preOrder](./main.ts#L160)
  - [postOrder](.main.ts#L172)