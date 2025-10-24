import { render, screen } from "@testing-library/react"
import Contact from "../pages/Contact"
import '@testing-library/jest-dom'

  
test('should render the contact', () => { 
    render(<Contact/>)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()


   })

test('should render button',() => {
    render(<Contact/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test('should render multiple input',() => {
    render(<Contact/>)
    const inputBoxes = screen.getAllByRole("textbox")
    expect(inputBoxes.length).toBe(2)
})