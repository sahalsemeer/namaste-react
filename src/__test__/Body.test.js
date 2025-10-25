import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../components/Body"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom';


it("should render search button",() => {
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)

    const filterBtn = screen.getByTestId('filter')
    // console.log(searchBtn);
    fireEvent.click(filterBtn)
    const cards = screen.getAllByTestId('restoCard')
    expect(cards.length).toBe(4);



    // expect(searchBtn).toBeInTheDocument()
})