import { render, screen } from "@testing-library/react";
import UserTable from "./UsersTable";

describe("UserTable component", () => {
  it("should be rendered", () => {
    expect(UserTable).toBeDefined();
    expect(UserTable).toBeTruthy();
  });

  it("should have a table", () => {
    render(<UserTable />);
    const table = screen.getByRole("table");
    expect(table).toBeDefined();
    expect(table).toBeTruthy();
  });
});
