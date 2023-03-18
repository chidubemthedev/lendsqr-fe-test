import { render, screen } from "@testing-library/react";
import MobileMenu from "./MobileMenu";

describe("MobileMenu component", () => {
  it("should have a mobile menu", () => {
    expect(MobileMenu).toBeDefined();
    expect(MobileMenu).toBeTruthy();
  });
});