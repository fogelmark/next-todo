
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from '@/app/page';

it("should have Hej text", () => {
  // TRIPPLE A PATTERN
  render(<Home />); // ARRANGE
  const section = screen.getByText("Hej"); // ACT
  expect(section).toBeInTheDocument(); // ASSERT
})
