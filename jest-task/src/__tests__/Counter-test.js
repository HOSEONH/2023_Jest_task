import {fireEvent, render, screen} from "@testing-library/react"
import Counter from "../components/Counter"

it('Counter 컴포넌트의 숫자 값 확인', () => {
    render(<Counter />)
    const view = screen.getByText("0");
    expect(view).toBeInTheDocument();
    expect(view).toBeTruthy();
});

it('Counter 컴포넌트의 증가버튼 확인', () => {
    render(<Counter />)
    const incrementBtn = screen.getByTestId('incrementBtn');

    fireEvent.click(incrementBtn)

    const changeState = screen.getByText("1");
    expect(changeState).toBeTruthy();
});

it('Counter 컴포넌트의 감소버튼 확인', () => {
    render(<Counter />)
    const decrementBtn = screen.getByTestId('decrementBtn');

    fireEvent.click(decrementBtn)
    fireEvent.click(decrementBtn)

    const changeState = screen.getByText("-2");
    expect(changeState).toBeTruthy();
});