import { TreeNode, levelOrder } from "./index"; // Replace with the correct path to your solution file

describe("levelOrder", () => {
  it("should perform level order traversal of a binary tree", () => {
    // Create a sample binary tree
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const result = levelOrder(root);

    expect(result).toEqual([[3], [9, 20], [15, 7]]);
  });

  it("should handle an empty tree", () => {
    const result = levelOrder(null);
    expect(result).toEqual([]);
  });

  it("should handle a tree with a single node", () => {
    const root = new TreeNode(1);
    const result = levelOrder(root);
    expect(result).toEqual([[1]]);
  });

  it("should handle a skewed tree", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    const result = levelOrder(root);
    expect(result).toEqual([[1], [2], [3]]);
  });

  it("should handle a deep tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    const result = levelOrder(root);
    expect(result).toEqual([[1], [2], [3], [4]]);
  });
});
