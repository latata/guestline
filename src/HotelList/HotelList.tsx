import HotelCard from "../HotelCard/HotelCard";
import React from "react";
import { useQuery } from "react-query";
import { fetchHotelsWithRooms } from "./HotelService";
import { IFilters } from "../types";
import { Card } from "@mui/material";
import HotelCardSkeleton from "../HotelCard/HotelCardSkeleton";

interface HotelsListProps {
  filters: IFilters;
}

export default function HotelList({ filters }: HotelsListProps) {
  const { data, status } = useQuery(["hotels", filters], () => {
    return fetchHotelsWithRooms(filters);
  });

  if (status === "loading") {
    return (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <HotelCardSkeleton key={i} />
        ))}
      </>
    );
  }

  if (status === "success" && data) {
    return (
      <>
        {data.length > 0 &&
          data.map((hotelWithRooms) => (
            <HotelCard
              key={hotelWithRooms.hotel.id}
              hotelWithRooms={hotelWithRooms}
            />
          ))}
        {data.length === 0 && (
          <Card sx={{ my: 2, py: 2, textAlign: "center" }}>
            <em>No results have been found.</em>
          </Card>
        )}
      </>
    );
  }

  return (
    <Card sx={{ my: 2, py: 2, textAlign: "center" }}>
      <em>Unexpected error.</em>
    </Card>
  );
}
