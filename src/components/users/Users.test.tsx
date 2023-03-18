import { render, screen } from "@testing-library/react";

import Users from "./Users";

describe("Users component", () => {
  it("should have a Users component", () => {
    expect(Users).toBeDefined();
    expect(Users).toBeTruthy();
  });

    it("should have a container", () => {
      render(<Users />);
      const container = screen.getByTestId("containermain");
      expect(container).toBeDefined();
    });
});