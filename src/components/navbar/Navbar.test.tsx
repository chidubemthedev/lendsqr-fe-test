import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("should have a navbar", () => {
    expect(Navbar).toBeDefined();
    expect(Navbar).toBeTruthy();
  });

  it("should have a search input", () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText("Search for anything");
    expect(input).toHaveValue("");
  });

  it("should have a search button", () => {
    render(<Navbar />);
    const input = screen.getAllByRole("button");
    expect(input).toBeDefined();
  });
});