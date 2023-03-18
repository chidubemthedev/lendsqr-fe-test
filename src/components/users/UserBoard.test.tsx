import { render, screen } from "@testing-library/react";
import UsersBoard from "./UsersBoard";

describe("UsersBoard component", () => {
  it("should have a UsersBoard component", () => {
    expect(UsersBoard).toBeDefined();
    expect(UsersBoard).toBeTruthy();
  });

    it("should have a container", () => {
      render(<UsersBoard />);
      const container = screen.getByTestId("container");
      expect(container).toBeDefined();
    });

    it("should have 4 cards", () => {
      render(<UsersBoard />);
      const card = screen.getAllByTestId("cards");
      expect(card).toHaveLength(4);
    });

    it("should have a title", () => {
      render(<UsersBoard />);
      const title = screen.getByText("Users");
      expect(title).toBeDefined();
    });

    it("should have a value", () => {
      render(<UsersBoard />);
      const value = screen.getByText("12,453");
      expect(value).toBeDefined();
    });

    it("should have 4 card content", () => {
        render(<UsersBoard />);
        const card = screen.getAllByTestId("cards");
        expect(card).toHaveLength(4);
        expect(card[0]).toHaveTextContent("Users2,453");
        expect(card[1]).toHaveTextContent("Active Users2,453"); 
        expect(card[2]).toHaveTextContent("Users with Loan12,453");
        expect(card[3]).toHaveTextContent("Users with Savings102,453");
    })
});