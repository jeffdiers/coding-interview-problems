import { hasPath } from "./index.ts"; // Replace with the actual file path and import statement

describe("hasPath function", () => {
  it("should return true if there is a path between two nodes", () => {
    /*
     * Example Graph:
     * A -> B -> D
     * |    |
     * v    v
     * C -> F
     */
    const graph: Record<string, string[]> = {
      A: ["B", "C"],
      B: ["D"],
      C: ["F"],
      D: [],
      F: [],
    };

    expect(hasPath(graph, "A", "D")).toBe(true); // A -> B -> D
    expect(hasPath(graph, "A", "F")).toBe(true); // A -> C -> F
    expect(hasPath(graph, "B", "D")).toBe(true); // B -> D (directed path)
    expect(hasPath(graph, "C", "F")).toBe(true); // C -> F (directed path)
  });

  it("should return false if there is no path between two nodes", () => {
    /*
     * Example Graph:
     * A -> B -> D
     * |    |
     * v    v
     * C -> F
     */
    const graph: Record<string, string[]> = {
      A: ["B", "C"],
      B: ["D"],
      C: ["F"],
      D: [],
      F: [],
    };

    expect(hasPath(graph, "B", "C")).toBe(false); // No path between B and C
    expect(hasPath(graph, "F", "A")).toBe(false); // No path between F and A
  });

  it("should handle self-connected nodes", () => {
    /*
     * Example Graph:
     * A -> A (self-connected)
     */
    const graph: Record<string, string[]> = {
      A: ["A"], // A is self-connected
    };

    expect(hasPath(graph, "A", "A")).toBe(true); // A is connected to itself
  });

  // Add more test cases as needed
});
