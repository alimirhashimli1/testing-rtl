import { render, screen } from "@testing-library/react"
import { Greet } from "../components/greet/greet"


describe("Greet", () => {

    
    it("renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
})




    })
    describe("Nested", () => {

        it("renders with a name", () => {
            render(<Greet name="Ali" />)
            const textElement = screen.getByText("Hello Ali")
            expect(textElement).toBeInTheDocument()
        })
    })