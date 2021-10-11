import { IFilters, IHotel, IHotelWithRooms, IRoomsResponse } from "../types";

const apiBaseURL = "https://obmng.dbm.guestline.net/api/";
const collectionId = "OBMNG";

async function fetchHotels(): Promise<IHotel[]> {
  const response = await fetch(
    `${apiBaseURL}hotels?collection-id=${collectionId}`
  );
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}

async function fetchRooms(hotelId: string): Promise<IRoomsResponse> {
  const response = await fetch(
    `${apiBaseURL}roomRates/${collectionId}/${hotelId}`
  );
  if (!response.ok) {
    // In real world application it shouldn't be so generic
    throw new Error();
  }

  return response.json();
}

function applyFilters(hotelsWithRooms: IHotelWithRooms[], filters: IFilters) {
  const filteredHotels = hotelsWithRooms.filter((hotelWithRooms) => {
    return parseInt(hotelWithRooms.hotel.starRating, 10) >= filters.rating;
  });

  return filteredHotels
    .map((hotelWithRooms) => {
      const filteredRooms = hotelWithRooms.rooms.filter(
        (room) =>
          filters.adults <= room.occupancy.maxAdults &&
          filters.children <= room.occupancy.maxChildren &&
          filters.adults + filters.children <= room.occupancy.maxOverall
      );

      return {
        ...hotelWithRooms,
        rooms: filteredRooms,
      };
    })
    .filter((hotelsWithRooms) => hotelsWithRooms.rooms.length > 0);
}

export async function fetchHotelsWithRooms(
  filters: IFilters
): Promise<IHotelWithRooms[]> {
  const hotels = await fetchHotels();

  const roomsForHotels = await Promise.all(
    hotels.map((hotel) => fetchRooms(hotel.id))
  );

  return applyFilters(
    hotels.map((hotel, index) => ({
      hotel,
      ...roomsForHotels[index],
    })),
    filters
  );
}
