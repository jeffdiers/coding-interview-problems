import { useHover } from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";

const wait = (delay: number = 1000) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

describe("useHover", () => {
  test("event listeners should be attached", async () => {
    function App() {
      const [ref, isHovered] = useHover<HTMLDivElement>();
      return (
        <div>
          <p>{isHovered ? "hovered" : "not hovered"}</p>
          <div ref={ref} data-testid="hover-target">
            hover me
          </div>
        </div>
      );
    }

    render(<App />);

    await screen.findByText("not hovered");
    const target = screen.getByTestId("hover-target");

    await wait(200);

    userEvent.hover(target);
    await screen.findByText("hovered");
    userEvent.unhover(target);
    await screen.findByText("not hovered");
  });

  test("event listeners should be detached when ref.current changes", async () => {
    function App() {
      const [ref, isHovered] = useHover<HTMLDivElement>();
      const [refTarget, setRefTarget] = useState<string>("target0");
      return (
        <div>
          <p>{isHovered ? "hovered" : "not hovered"}</p>
          <button
            data-testid="change-ref-target-button"
            onClick={() => {
              setRefTarget((target) =>
                target === "target0" ? "target1" : "target0"
              );
            }}
          >
            current target: {refTarget}
          </button>
          <div
            ref={refTarget === "target0" ? ref : null}
            data-testid="hover-target0"
          >
            target 0
          </div>
          <div
            ref={refTarget === "target1" ? ref : null}
            data-testid="hover-target1"
          >
            target 1
          </div>
        </div>
      );
    }

    render(<App />);

    await screen.findByText("not hovered");
    const target0 = screen.getByTestId("hover-target0");
    const target1 = screen.getByTestId("hover-target1");

    await wait(200);

    // Hovering on first target should work
    userEvent.hover(target0);
    await screen.findByText("hovered");
    userEvent.unhover(target0);
    await screen.findByText("not hovered");

    // Hovering on second target should not work
    userEvent.hover(target1);
    await wait(200);
    await screen.findByText("not hovered");
    userEvent.unhover(target1);

    // Change hover target
    const toggleButton = screen.getByTestId("change-ref-target-button");
    userEvent.click(toggleButton);
    await wait(200);

    // Hovering on first target should not work
    userEvent.hover(target0);
    await wait(200);
    await screen.findByText("not hovered");

    // Hovering on second target works
    userEvent.hover(target1);
    await screen.findByText("hovered");
    userEvent.unhover(target1);
    await screen.findByText("not hovered");
  });

  test("should work on deferred ref", async () => {
    function App() {
      const [isReady, setIsReady] = useState(false);
      const [ref, isHovered] = useHover<HTMLDivElement>();

      useEffect(() => {
        setIsReady(true);
      }, []);

      return (
        <div>
          <p>{isHovered ? "hovered" : "not hovered"}</p>
          <div ref={isReady ? ref : null} data-testid="hover-target">
            target
          </div>
        </div>
      );
    }

    render(<App />);

    await screen.findByText("not hovered");
    const target = screen.getByTestId("hover-target");

    await wait(200);

    userEvent.hover(target);
    await screen.findByText("hovered");
    userEvent.unhover(target);
    await screen.findByText("not hovered");
  });
});
