import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserDetail from "./UserDetail";

describe("UserDetail component", () => {
  it("should have 3 buttons", () => {
    render(
      <BrowserRouter>
        <UserDetail />
      </BrowserRouter>
    );
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(3);
  });

  it("should start at top of page", () => {
    render(
      <BrowserRouter>
        <UserDetail />
      </BrowserRouter>
    );
    expect(window.scrollY).toBe(0);
  });
});
