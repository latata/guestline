import { IHotel, IHotelWithRooms, IRoom } from "../types";

interface IHotelGenerate {
  id: string;
  starRating: string;
}
interface IRoomGenerate {
  id: string;
  maxChildren: number;
  maxAdults: number;
  maxOverall: number;
}

function generateHotel({ id, starRating }: IHotelGenerate): IHotel {
  return {
    id,
    name: `${id} name`,
    description: `${id} description`,
    address1: `${id} address1`,
    address2: `${id} address1`,
    postcode: `${id} post code`,
    town: `${id} town`,
    starRating,
    images: [
      {
        url: `https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/${id}.jpg`,
      },
    ],
  };
}

function generateRoom({
  id,
  maxChildren,
  maxAdults,
  maxOverall,
}: IRoomGenerate): IRoom {
  return {
    id,
    name: `${id} name`,
    longDescription: `${id} longDescription`,
    occupancy: {
      maxOverall,
      maxChildren,
      maxAdults,
    },
  };
}

export const hotel1WithRooms: IHotelWithRooms = {
  hotel: generateHotel({ id: "Hotel1", starRating: "3" }),
  rooms: [
    generateRoom({
      id: `Hotel1 Room1`,
      maxAdults: 3,
      maxChildren: 2,
      maxOverall: 4,
    }),
    generateRoom({
      id: `Hotel1 Room2`,
      maxAdults: 2,
      maxChildren: 0,
      maxOverall: 2,
    }),
  ],
};

export const hotel2WithRooms: IHotelWithRooms = {
  hotel: generateHotel({ id: "Hotel2", starRating: "4" }),
  rooms: [
    generateRoom({
      id: `Hotel2 Room1`,
      maxAdults: 2,
      maxChildren: 0,
      maxOverall: 2,
    }),
    generateRoom({
      id: `Hotel2 Room2`,
      maxAdults: 2,
      maxChildren: 0,
      maxOverall: 2,
    }),
  ],
};
