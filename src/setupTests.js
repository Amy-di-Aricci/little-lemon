// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const originalWarn = console.warn;

// This warning has been silenced, as there is an issue with proper measurement during rendering of MenuItems from MUI in test environment, which is an external dependency
beforeAll(() => {
	jest.spyOn(console, "warn").mockImplementation((message, ...args) => {
		if (
			typeof message === "string" &&
			message.includes(
				"The `anchorEl` prop provided to the component is invalid",
			)
		) {
			return;
		}

		originalWarn(message, ...args);
	});
});
