import {render, screen, waitFor} from "@testing-library/react"
import {Counter} from "./counter"
import user from '@testing-library/user-event';
import { act } from "react-dom/test-utils";


describe("Counter", () => {
    test("renders correctly", () => {
        render(<Counter/>)
        const countElement = screen.getByRole("heading")
        expect(countElement).toBeInTheDocument()
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        })
        expect(incrementButton).toBeInTheDocument()
    })

    test("renders a count of 0", () => {
        render(<Counter/>)
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("0")
    })

    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        await waitFor(() => {
        expect(countElement).toHaveTextContent('1')
    })

      })
    
      test('renders a count of 2 after clicking the increment button twice', async () => {
        user.setup()
            render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.click(incrementButton)
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
    
    expect(countElement).toHaveTextContent('2')
      })


      test("renders a count of 10 after clicking the button", async () => {
        user.setup()
        render(<Counter/>)
        const amountInput = screen.getByRole("spinbutton")
        await user.type(amountInput, "10")
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole("button", {
            name: "Set"
        })
        await user.click(setButton)
        const counterElement = screen.getByRole("heading")
        expect(counterElement).toHaveTextContent("10")
      })

      test("elements are focused in the right der", async () => {
        user.setup()
        render(<Counter/>)
        const amountInput = screen.getByRole("spinbutton")
        const setButton = screen.getByRole("button", {name: "Increment"})
        await user.tab()
        expect(setButton).toHaveFocus()
      })
})