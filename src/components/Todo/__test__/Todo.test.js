import { render, screen , fireEvent} from '@testing-library/react';
import Todo from '../Todo';
import {BrowserRouter} from "react-router-dom";

const MockTodo = () => {
    return <BrowserRouter>
        <Todo />
    </BrowserRouter>
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    const buttonElement = screen.getByRole("button", {name: /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target:{value:"Go Grocery Shopping"}});
        fireEvent.click(buttonElement);
    })
}
describe("Todo", ()=> {
    it('Should render same text passed into title prop', async () => {
       render(<MockTodo />);
       addTask(["Go Grocery Shopping"]);
       const divElement = screen.getByText(/Go Grocery Shopping/i);
       expect(divElement).toBeInTheDocument();
    });

    it('Should render multiple elements', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping","Pet my Cat","Wash my Hands"]);
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3);
    });

    it('Tasks should not have completed class when initially rendered', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('Tasks should have completed class when clicked', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
});
