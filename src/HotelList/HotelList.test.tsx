import HotelList from "./HotelList";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { IFilters } from "../types";
import { useQuery } from "react-query";
import { hotel1WithRooms, hotel2WithRooms } from "../mocks/mocks";

jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

const mockedUseQuery = mocked<any>(useQuery);

const defaultFilters: IFilters = {
  rating: 3,
  adults: 2,
  children: 0,
};

describe("HotelList", () => {
  test("renders list on success", async () => {
    mockedUseQuery.mockImplementation(() => ({
      data: [hotel1WithRooms, hotel2WithRooms],
      status: "success",
    }));
    const { findAllByTestId } = render(<HotelList filters={defaultFilters} />);

    expect((await findAllByTestId("hotel-card")).length).toBe(2);
  });

  test("renders no results", async () => {
    mockedUseQuery.mockImplementation(() => ({ data: [], status: "success" }));
    const { findByText } = render(<HotelList filters={defaultFilters} />);

    expect(await findByText("No results have been found.")).toBeInTheDocument();
  });

  test("renders error message", async () => {
    mockedUseQuery.mockImplementation(() => ({ status: "error" }));
    const { findByText } = render(<HotelList filters={defaultFilters} />);

    expect(await findByText("Unexpected error.")).toBeInTheDocument();
  });

  test("renders skeleton while loading", async () => {
    mockedUseQuery.mockImplementation(() => ({ status: "loading" }));
    const { findAllByTestId } = render(<HotelList filters={defaultFilters} />);

    expect((await findAllByTestId("hotel-card-skeleton")).length).toBe(5);
  });
});
