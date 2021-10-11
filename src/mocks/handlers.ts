import { rest } from "msw";

export const handlers = [
  rest.get("https://obmng.dbm.guestline.net/api/hotels", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "Hotel1",
          name: "Mock Hotel 1",
          description: "Mock Hotel 1 Description",
          address1: "Mock Hotel 1 Address 1",
          address2: "Mock Hotel 1 Address 2",
          postcode: "123 123",
          town: "Mock Hotel 1 Town",
          starRating: "4",
          images: [
            {
              url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG",
            },
            {
              url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg",
            },
            {
              url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
            },
          ],
        },
        {
          id: "Hotel2",
          name: "Mock Hotel 2",
          description: "Mock Hotel 2 Description",
          address1: "Mock Hotel 2 Address 1",
          address2: "Mock Hotel 2 Address 2",
          postcode: "123 123",
          town: "Mock Hotel 2 Town",
          starRating: "5",
          images: [
            {
              url: "https://guestline.com/hotel1image1.jpg",
            },
          ],
        },
      ])
    );
  }),
  rest.get(
    "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/:hotelId",
    (req, res, ctx) => {
      const { hotelId } = req.params;
      return res(
        ctx.json({
          rooms: [
            {
              id: `${hotelId}Room1`,
              name: "Room 1",
              longDescription: `${hotelId} Room 1 Long description`,
              occupancy: { maxAdults: 3, maxChildren: 2, maxOverall: 4 },
            },
            {
              id: `${hotelId}Room2`,
              name: "Room 2",
              longDescription: `${hotelId} Room 2 Long description`,
              occupancy: { maxAdults: 2, maxChildren: 0, maxOverall: 2 },
            },
          ],
        })
      );
    }
  ),
];
