import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import userStore from "../store/userStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


it('should be header in the login ',() => {
    render(
        <BrowserRouter>
        <Provider store={userStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()


})


it('should work when clicked login', () => {
    render(
        <BrowserRouter>
        <Provider store={userStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button',{name:'Login'})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole('button',{name:'Logout'})

    expect(loginButton).toBeInTheDocument()
})