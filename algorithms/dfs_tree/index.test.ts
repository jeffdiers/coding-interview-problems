import { TreeNode, depthFirstSearch } from "./index";

describe("depthFirstSearch function", () => {
  it("should return elements in DFS order", () => {
    /*
     * Example Tree:
     *      1
     *     / \
     *    2   3
     *   / \
     *  4   5
     */
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    const result = depthFirstSearch(root);
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  it("should handle a single-node tree", () => {
    const root = new TreeNode(42);
    const result = depthFirstSearch(root);
    expect(result).toEqual([42]);
  });

  // it("should handle an empty tree", () => {
  //   const result = depthFirstSearch(null);
  //   expect(result).toEqual([]);
  // });

  // Add more test cases as needed
});
