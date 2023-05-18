import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import Button from ".";

test("Button", () => {
  render(<Button />);

  const button = screen.getByRole("button");
  expect(button).toBeDefined();
});
