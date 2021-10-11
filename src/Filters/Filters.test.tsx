import { render, fireEvent } from "@testing-library/react";
import Filters from "./Filters";
import { IFilters } from "../types";

const filters: IFilters = {
  rating: 3,
  adults: 1,
  children: 1,
};

describe("Filters", () => {
  test("star rating filter", async () => {
    const setFiltersMock = jest.fn();
    const { findByLabelText } = render(
      <Filters filters={filters} setFilters={setFiltersMock} />
    );

    expect((await findByLabelText("3 Stars")) as HTMLInputElement).toBeTruthy();

    fireEvent.click(await findByLabelText("5 Stars"));

    expect(setFiltersMock).toBeCalledWith({ ...filters, rating: 5 });
  });

  test("adults filter", async () => {
    const setFiltersMock = jest.fn();
    const { findByLabelText } = render(
      <Filters filters={filters} setFilters={setFiltersMock} />
    );

    expect((await findByLabelText("adults")).textContent).toBe("1");

    fireEvent.click(await findByLabelText("adults - more"));

    expect(setFiltersMock).toBeCalledWith({ ...filters, adults: 2 });

    fireEvent.click(await findByLabelText("adults - less"));

    expect(setFiltersMock).toBeCalledWith({ ...filters, adults: 0 });
  });

  test("children filter", async () => {
    const setFiltersMock = jest.fn();
    const { findByLabelText } = render(
      <Filters filters={filters} setFilters={setFiltersMock} />
    );

    expect((await findByLabelText("children")).textContent).toBe("1");

    fireEvent.click(await findByLabelText("children - more"));

    expect(setFiltersMock).toBeCalledWith({ ...filters, children: 2 });

    fireEvent.click(await findByLabelText("children - less"));

    expect(setFiltersMock).toBeCalledWith({ ...filters, children: 0 });
  });
});
