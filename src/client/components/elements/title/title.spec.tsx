import { render, screen } from "@testing-library/react";
import { Title } from "./title.elements";

describe("Logo", () => {
    it("renders", () => {
        render(<Title />);
    });

    it("has title", () => {
        render(<Title title="Title"/>);
        expect(screen.getByText("Title")).toBeInTheDocument();
    });
});
