import { countComponents } from "./index";

describe("Number of Connected Components", () => {
  it("Should find 2 connected components in a graph with 2 separate components", () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [3, 4],
    ];
    const count = countComponents(n, edges);
    expect(count).toBe(2);
  });

  it("Should find 1 connected component in a graph with 1 component", () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const count = countComponents(n, edges);
    expect(count).toBe(1);
  });

  it("Should find 2 connected components in a graph with 2 separate components", () => {
    const n = 6;
    const edges = [
      [0, 1],
      [1, 2],
      [3, 4],
      [4, 5],
    ];
    const count = countComponents(n, edges);
    expect(count).toBe(2);
  });

  it("Should find 5 connected components in a graph with no edges", () => {
    const n = 5;
    const edges: number[][] = [];
    const count = countComponents(n, edges);
    expect(count).toBe(5);
  });

  it("Should find 1 connected component in a graph with a single node", () => {
    const n = 1;
    const edges: number[][] = [];
    const count = countComponents(n, edges);
    expect(count).toBe(1);
  });
});
