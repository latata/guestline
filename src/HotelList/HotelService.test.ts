import { fetchHotelsWithRooms } from "./HotelService";
import { IFilters } from "../types";
import { server } from "../mocks/server";
import {
  handlersWithHotelsFailing,
  handlersWithRoomsFailing,
} from "../mocks/handlers";

const defaultFilters: IFilters = {
  rating: 3,
  adults: 2,
  children: 0,
};

interface ITestCase {
  name: string;
  filters: IFilters;
  hotelIds: string[];
  roomsLength: number[];
}

const successTestCases: ITestCase[] = [
  {
    name: "wit default filters",
    filters: defaultFilters,
    hotelIds: ["Hotel1", "Hotel2"],
    roomsLength: [2, 2],
  },
  {
    name: "with 4+ stars",
    filters: {
      ...defaultFilters,
      rating: 4,
    },
    hotelIds: ["Hotel2"],
    roomsLength: [2],
  },
  {
    name: "with 2 adults + 2 children",
    filters: {
      ...defaultFilters,
      adults: 2,
      children: 2,
    },
    hotelIds: ["Hotel1"],
    roomsLength: [1],
  },
  {
    name: "with 3 adults + 2 children",
    filters: {
      ...defaultFilters,
      adults: 3,
      children: 2,
    },
    hotelIds: [],
    roomsLength: [],
  },
];

describe("fetchHotelsWithRooms failure", () => {
  test("hotels request fails", async () => {
    server.resetHandlers(...handlersWithHotelsFailing);

    await expect(fetchHotelsWithRooms(defaultFilters)).rejects.toThrow();
  });

  test("rooms request fails", async () => {
    server.resetHandlers(...handlersWithRoomsFailing);

    await expect(fetchHotelsWithRooms(defaultFilters)).rejects.toThrow();
  });
});

describe.each(successTestCases)(
  "fetchHotelsWithRooms success",
  ({ name, filters, hotelIds, roomsLength }) => {
    test(`${name}`, async () => {
      const hotelsWithRooms = await fetchHotelsWithRooms(filters);

      expect(
        hotelsWithRooms.map((hotelsWithRooms) => hotelsWithRooms.hotel.id)
      ).toEqual(hotelIds);
      expect(hotelsWithRooms.map(({ rooms }) => rooms.length)).toEqual(
        roomsLength
      );
    });
  }
);
