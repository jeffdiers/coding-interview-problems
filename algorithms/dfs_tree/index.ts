// Problem Statement:

// You are given the root of a binary tree, and you need to implement a
// function depthFirstSearch that performs a Depth-First Search traversal
// on the tree and returns the elements of the tree in DFS order.

// Write a function depthFirstSearch that takes the root node of a binary
// tree as input and returns an array containing the elements in DFS order.

// Example:
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// const result = depthFirstSearch(root);
// console.log(result); // Output: [1, 2, 4, 5, 3]

// In this example, the depthFirstSearch function should perform a DFS
// traversal on the binary tree starting from the root and return the
// elements [1, 2, 4, 5, 3] in the order they are visited.

// Constraints:

// The tree nodes are instances of the TreeNode class with a val, left,
// and right property.
// The tree may not be balanced, and nodes can have at most two children.
// Your task is to implement the depthFirstSearch function in JavaScript.
// You can use either a recursive or iterative approach to perform the
// DFS traversal.

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export const depthFirstSearch = (root: TreeNode) => {
  // Your code here
};
