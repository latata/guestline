import { rest } from "msw";
import { IHotel, IHotelWithRooms, IRoom } from "../types";
import { hotel1WithRooms, hotel2WithRooms } from "./mocks";

const roomsMap: { [key: string]: IRoom[] } = {
  Hotel1: hotel1WithRooms.rooms,
  Hotel2: hotel2WithRooms.rooms,
};

const defaultHotelsHandler = rest.get(
  "https://obmng.dbm.guestline.net/api/hotels",
  (req, res, ctx) => {
    return res(ctx.json([hotel1WithRooms.hotel, hotel2WithRooms.hotel]));
  }
);

const defaultRoomsHandler = rest.get(
  "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/:hotelId",
  (req, res, ctx) => {
    const { hotelId } = req.params;
    return res(
      ctx.json({
        rooms: roomsMap[hotelId],
      })
    );
  }
);

const hotelsFailingHandler = rest.get(
  "https://obmng.dbm.guestline.net/api/hotels",
  (req, res, ctx) => res(ctx.status(500))
);

const roomsFailingHandler = rest.get(
  "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/:hotelId",
  (req, res, ctx) => res(ctx.status(500))
);

export default [defaultHotelsHandler, defaultRoomsHandler];

export const handlersWithHotelsFailing = [
  hotelsFailingHandler,
  defaultRoomsHandler,
];

export const handlersWithRoomsFailing = [
  defaultHotelsHandler,
  roomsFailingHandler,
];
