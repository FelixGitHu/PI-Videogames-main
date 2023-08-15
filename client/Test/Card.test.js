import Card from "../src/components/Card/Card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
    it("should render the correct output", () => {
      const view = render(<Card name="The Shawshank Redemption" released="1994" rating="9.3" />);
  
      expect(view).toHaveTextContent("The Shawshank Redemption");
      expect(view).toHaveTextContent("1994");
      expect(view).toHaveTextContent("9.3");
    });
  });