import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Sidebar from "./Sidebar";

describe("Sidebar component", () => {
  it("should have a sidebar", () => {
    expect(Sidebar).toBeDefined();
    expect(Sidebar).toBeTruthy();
  });

  it("should have three h1 elements", () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const h1 = screen.getAllByRole("heading");
    expect(h1).toHaveLength(3);
  });

  it("should change routes when clicked", async () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const link = screen.getByRole('link', { name: 'Dashboard' });
    userEvent.click(link);

    await screen.findByRole('heading', { name: 'Dashboard Page' });
    expect(window.location.pathname).toBe('/dashboard');
  });
});
