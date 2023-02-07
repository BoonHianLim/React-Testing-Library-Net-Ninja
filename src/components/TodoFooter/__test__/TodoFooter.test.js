import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {

    describe("Functionality 1", () => {
        it('Should render the correct amount of incomplete tasks', async () => {
            render(
                <MockTodoFooter
                    numberOfIncompleteTasks={5}
                />
            );
            const paragraphElement = screen.getByText(/5 tasks left/i);
            expect(paragraphElement).toBeInTheDocument();
        });
    })


    describe("Functionality 2", () => {
        it('Should render "task" when the number of incomplete tasks is one', async () => {
            render(
                <MockTodoFooter
                    numberOfIncompleteTasks={1}
                />
            );
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement).toBeInTheDocument();
        });
    })

})

/*

it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy();
});

it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
    //expect(paragraphElement).not.toBeVisible();  for invisible elements
});

it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML("p");
});

it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent("1 task left");
});

it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toBeTruthy();
    //expect(paragraphElement).not.toBeFalsy();
});

it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left");
});

//multiple assertion is possible, but not encouraged (to isolate the problem/bug)
it('Should render "task" when the number of incomplete tasks is one', async () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left");
    expect(paragraphElement.textContent).toBe("1 task left");
    expect(paragraphElement.textContent).toBe("1 task left");
    expect(paragraphElement.textContent).toBe("1 task left");
});
*/
