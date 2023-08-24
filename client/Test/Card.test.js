import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import Button from "./Button";
import Card from "../src/components/Card/Card";

// afterEach function runs after each test suite is executed
afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
})

describe("Card Component", () => {
	const setToggle = jest.fn();
	render(<Card setToggle={setToggle} btnTxt="Click Me!" />);
	const button = screen.getByTestId("button");

	// Test 1
	test("Button Rendering", () => {
		expect(button).toBeInTheDocument();
	})

	// Test 2
	test("Button Text", () => {
		expect(button).toHaveTextContent("Click Me!");
	})
})
