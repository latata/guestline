import { render } from "@testing-library/react";
import HotelCard from "./HotelCard";
import { IHotelWithRooms } from "../types";

const hotelWithRooms: IHotelWithRooms = {
  hotel: {
    id: "hotel1",
    name: "Hotel 1",
    starRating: "2",
    address1: "Address 1",
    address2: "Address 2",
    description: "Description",
    postcode: "123 123",
    town: "Town",
    images: [
      {
        url: "https://guestline.image/image.jpg",
      },
    ],
  },
  rooms: [
    {
      id: "room1",
      name: "Room 1",
      occupancy: { maxAdults: 2, maxChildren: 2, maxOverall: 2 },
      longDescription: "Long description",
    },
    {
      id: "room2",
      name: "Room 2",
      occupancy: { maxAdults: 2, maxChildren: 2, maxOverall: 2 },
      longDescription: "Long description",
    },
  ],
};

describe("HotelCard", () => {
  test("renders", async () => {
    const { findByText, findByLabelText } = render(
      <HotelCard hotelWithRooms={hotelWithRooms} />
    );

    expect(await findByText("Hotel 1")).toBeInTheDocument();
    expect(await findByLabelText("2 Stars")).toBeInTheDocument();
    expect(
      await findByText("Address 1Address 2123 123 Town")
    ).toBeInTheDocument();
    expect(await findByText("Room 1")).toBeInTheDocument();
    expect(await findByText("Room 2")).toBeInTheDocument();
  });
});
