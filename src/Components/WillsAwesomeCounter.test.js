import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WillsAwesomeCounter from "./WillsAwesomeCounter";


test("counter should have the correct initial value when set to seven", () => {
    let startingValue = 7;
    let expectedValue = 7;
    render(<WillsAwesomeCounter initialValue={startingValue} />);

    const count = screen.queryByText(expectedValue);

    expect(count).toBeVisible();
});

test("counter should have a default initial value of 0", () => {
    let expectedValue = 0;
    render(<WillsAwesomeCounter />);

    const count = screen.queryByText(expectedValue);

    expect(count).toBeVisible();
});

test("counter should correctly increase value when add is clicked once", () => {
    let startingValue = 1;
    let expectedResult = 2;
    render(<WillsAwesomeCounter initialValue={startingValue} />);
    const addButton = screen.getByText("Add");

    userEvent.click(addButton);
    const count = screen.queryByText(expectedResult);

    expect(count).toBeVisible();
});

test("counter should correctly increase value when add is clicked twice", () => {
    let startingValue = 1;
    let expectedValue = 3;
    render(<WillsAwesomeCounter initialValue={startingValue} />);
    const addButton = screen.getByText("Add");

    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(expectedValue);

    expect(count).toBeVisible();
});

test("counter should correctly decrease value when remove is clicked once", () => {
    let startingValue = 5;
    let expectedValue = 4;
    render(<WillsAwesomeCounter initialValue={startingValue} />);
    const removeButton = screen.getByText("Remove");

    userEvent.click(removeButton);
    const count = screen.queryByText(expectedValue);

    expect(count).toBeVisible();
});

test("counter should correctly decrease value when remove is clicked twice", () => {
    let startingValue = 5;
    let expectedValue = 3;
    render(<WillsAwesomeCounter initialValue={startingValue} />);
    const removeButton = screen.getByText("Remove");

    userEvent.click(removeButton);
    userEvent.click(removeButton);
    const count = screen.queryByText(expectedValue);

    expect(count).toBeVisible();
});

test("counter should not allow a negative number when the initail value is 0 and remove is pressed", () => {
    let startingValue = 0;
    let expectedValue = 0;
    render(<WillsAwesomeCounter initialValue={startingValue} />);
    const removeButton = screen.getByText("Remove");

    userEvent.click(removeButton);
    const count = screen.queryByText(expectedValue);

    expect(count).toBeVisible();
});

test("counter should not allow a negative number when the initail value is 2 and remove is pressed 4 times", () => {
    let startingValue = 2;
    let expectedValue = 0;
    render(<WillsAwesomeCounter initialValue={startingValue} />);
    const removeButton = screen.getByText("Remove");

    userEvent.click(removeButton);
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    const count = screen.queryByText(expectedValue);

    expect(count).toBeVisible();
});