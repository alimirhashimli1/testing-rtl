import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"


test("greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
})

test("Greet renders with a name", () => {
    render(<Greet name="Ali" />)
    const textElement = screen.getByText("Hello Ali")
    expect(textElement).toBeInTheDocument()
})