// Problem Statement: Binary Tree Level Order Traversal

// Difficulty Level: Medium

// Problem Description:
// Given a binary tree, return the level order traversal of
// its nodes' values. Level order traversal means visiting
// all the nodes of the tree level by level, from left to right.

// Input:
// The root of a binary tree where each node has a value and may
// have left and/or right children.

// Output:
// An array of arrays where each sub-array represents a level of
// the binary tree, and the values within each sub-array are the
// values of the nodes at that level.

// Notes:
// The level order traversal should be performed from left to right.

// To solve this problem using BFS, you can use a queue to keep track
// of the nodes at each level and then build the result array accordingly.

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const levelOrder = (root: TreeNode | null): number[][] => {
  // Your code here
  if (!root) return [];
  const result: number[][] = [];
  let queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize: number = queue.length;
    const currLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currLevel);
  }

  return result;
};

// Example
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(4);
root.right.right.right = new TreeNode(20);

console.log(levelOrder(root));
// Should return [[3], [9, 20], [15, 7]]
