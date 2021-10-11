import { render } from "@testing-library/react";
import RoomDetails from "./RoomDetails";
import { IRoom } from "../types";

const room: IRoom = {
  id: "room1",
  name: "Room 1",
  longDescription: "Room 1 Description",
  occupancy: {
    maxAdults: 2,
    maxChildren: 3,
    maxOverall: 4,
  },
};

describe("RoomDetails", () => {
  test("renders", async () => {
    const { findByText } = render(<RoomDetails room={room} />);
    expect(await findByText("Room 1")).toBeInTheDocument();
    expect(await findByText("Adults: 2Children: 3")).toBeInTheDocument();
    expect(await findByText("Room 1 Description")).toBeInTheDocument();
  });
});
