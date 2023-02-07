import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", ()=> {
    it('Should render same text passed into title prop', async () => {
        render(<Header title = "My Header"/>);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });
})



/*

it('Should render same text passed into title prop', async () => {
    render(<Header title = "My Header"/>);
    const headingElement = screen.getByRole("heading", {name: "My Header"});
    expect(headingElement).toBeInTheDocument();
});

it('Should render same text passed into title prop', async () => {
    render(<Header title = "My Header"/>);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
});

it('Should render same text passed into title prop', async () => {
    render(<Header title = "My Header"/>);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});

//Find by
it('Should render same text passed into title prop', async () => {
    render(<Header title = "My Header"/>);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

//Query by
it('Should render same text passed into title prop', async () => {
    //check if an element is not in the document
    render(<Header title = "My Header"/>);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});

//GetAll
it('Should render same text passed into title prop', async () => {
    //check if an element is not in the document
    render(<Header title = "My Header"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
});
*/
