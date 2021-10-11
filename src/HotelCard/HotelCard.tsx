import Divider from "@mui/material/Divider";
import React from "react";

import { IHotelWithRooms } from "../types";
import ImageSlider from "./ImageSlider";
import RoomDetails from "./RoomDetails";
import HotelCardLayout from "./HotelCardLayout";
import { Rating } from "@mui/material";

interface HotelCardProps {
  hotelWithRooms: IHotelWithRooms;
}

export default function HotelCard({
  hotelWithRooms: { hotel, rooms },
}: HotelCardProps) {
  return (
    <HotelCardLayout
      testId="hotel-card"
      image={<ImageSlider images={hotel.images} name={hotel.name} />}
      name={hotel.name}
      rating={<Rating value={parseInt(hotel.starRating, 10)} readOnly />}
      address={
        <>
          {hotel.address1}
          <br />
          {hotel.address2 && (
            <>
              {hotel.address2}
              <br />
            </>
          )}
          {hotel.postcode} {hotel.town}
        </>
      }
      rooms={
        <>
          <Divider />
          {rooms.map((room, index) => (
            <React.Fragment key={room.id}>
              <RoomDetails room={room} />
              {index < rooms.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </>
      }
    />
  );
}
