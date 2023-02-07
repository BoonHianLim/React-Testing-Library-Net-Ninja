import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import {BrowserRouter} from "react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}
describe("FollowersList", ()=> {

    beforeEach(() => {
        console.log("Running before each test");
    })

    beforeAll(() => {
        console.log("Running once before all test");
    })

    afterEach(() => {
        console.log("Running after test");
    })

    afterAll(() => {
        console.log("Running once after all test");
    })

    it('Should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        //screen.debug();
        expect(followerDivElement).toBeInTheDocument();
    });

    /*it('Should render multiple follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElement.length).toBe(5);
    });*/
})
