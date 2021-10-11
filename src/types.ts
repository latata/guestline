export interface IHotelImage {
  url: string;
}

export interface IHotel {
  id: string;
  name: string;
  address1: string;
  address2?: string;
  postcode: string;
  town: string;
  description: string;
  starRating: string;
  images: IHotelImage[];
}

interface IRoomOccupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

export interface IRoomsResponse {
  rooms: IRoom[];
}

export interface IRoom {
  id: string;
  name: string;
  occupancy: IRoomOccupancy;
  longDescription: string;
}

export interface IHotelWithRooms {
  hotel: IHotel;
  rooms: IRoom[];
}

export interface IFilters {
  rating: number;
  adults: number;
  children: number;
}
