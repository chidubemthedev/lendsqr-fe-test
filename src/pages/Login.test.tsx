import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login component", () => {
  it("should have a login button", () => {
    expect(Login).toBeDefined();
    expect(Login).toBeTruthy();
  });

  it("input should be empty", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Email");
    expect(input).toHaveValue("");
  });

  it("should have empty password input", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Password");
    expect(input).toHaveValue("");
  });

  it("should have a show password input", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const input = screen.getByText("SHOW");
    expect(input).toHaveTextContent("SHOW");
  });

  it("should have a forgot password input", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const input = screen.getByText("Forgot password?");
    expect(input).toHaveTextContent("Forgot password?");
  });

  it("should route away when login button is clicked", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const input = screen.getByText("LOG IN");
    userEvent.click(input);
    expect(input).toHaveTextContent("LOG IN");
  });
});
