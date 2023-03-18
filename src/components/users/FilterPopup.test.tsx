import { render, screen } from "@testing-library/react";

import FilterPopup from "./FilterPopup";

describe("FilterPopup component", () => {
  it("should have a FilterPopup component", () => {
    expect(FilterPopup).toBeDefined();
    expect(FilterPopup).toBeTruthy();
  });

  it("should have a container", () => {
    render(<FilterPopup />);
    const container = screen.getByTestId("filtercontainer");
    expect(container).toBeDefined();
  });

  it("should have a form", () => {
    render(<FilterPopup />);
    const form = screen.getByTestId("filter-form");
    expect(form).toBeInTheDocument();
  });

  it("should have 2 buttons", () => {
    render(<FilterPopup />);
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(2);
  });
});
