import { render, fireEvent } from "@testing-library/react";
import Stepper from "./Stepper";

describe("Stepper", () => {
  test("changes value for values greater than 0", async () => {
    const setValueMock = jest.fn();
    const { findByLabelText } = render(
      <Stepper value={1} setValue={setValueMock} name="test" />
    );

    expect((await findByLabelText("test")).textContent).toBe("1");

    fireEvent.click(await findByLabelText("test - more"));

    expect(setValueMock).toBeCalledWith(2);

    fireEvent.click(await findByLabelText("test - less"));

    expect(setValueMock).toBeCalledWith(0);
  });

  test("does not decrement the value for zero", async () => {
    const setValueMock = jest.fn();
    const { findByLabelText } = render(
      <Stepper value={0} setValue={setValueMock} name="test" />
    );

    expect((await findByLabelText("test")).textContent).toBe("0");

    fireEvent.click(await findByLabelText("test - less"));

    expect(setValueMock).toBeCalledWith(0);
  });
});
