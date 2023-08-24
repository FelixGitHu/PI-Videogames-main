import SearchBar from "../src/components/SearchBar/SearchBar";
import { render, screen } from "@testing-library/react";

xdescribe("SearchBar", () => {
  it("should render the correct output", () => {
    const view = render(<SearchBar />);

    expect(view.container).toHaveTextContent("Busque un nombre");
  });

  it("should call the searchVideogames action on change", () => {
    const dispatch = jest.fn();
    render(<SearchBar dispatch={dispatch} />);

    const input = screen.getByPlaceholderText("Busque un nombre");
    input.value = "The Shawshank Redemption";
    input.dispatchEvent(new Event("change"));

    expect(dispatch).toBeCalledWith({
      type: "searchVideogames",
      nombre: "The Shawshank Redemption",
    });
  });
});