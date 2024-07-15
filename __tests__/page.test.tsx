import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Home from "@/app/page";

// TRIPPLE A PATTERN || ARRANGE, ACT, ASSERT

describe("Home", () => {
  it("should render the main section", () => {
    render(<Home />);
    const mainSection = screen.getByTestId("main");
    expect(mainSection).toBeInTheDocument();
  });

  it("should render the Heading component", () => {
    render(<Home />);
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should render the AddTodoForm component", () => {
    render(<Home />);
    const addTodoForm = screen.getByTestId("add-todo-form");
    expect(addTodoForm).toBeInTheDocument();
  });

  it("should render the TodoList component", () => {
    render(<Home />);
    const todoList = screen.getByTestId("todo-list");
    expect(todoList).toBeInTheDocument();
  });
});