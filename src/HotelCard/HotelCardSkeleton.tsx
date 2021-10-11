import HotelCardLayout from "./HotelCardLayout";
import ImageSlider from "./ImageSlider";
import { Skeleton } from "@mui/material";
import React from "react";

export default function HotelCardSkeleton() {
  return (
    <HotelCardLayout
      testId="hotel-card-skeleton"
      image={<ImageSlider name="Skeleton" />}
      name={<Skeleton width={200} />}
      rating={<Skeleton variant="rectangular" width={120} height={24} />}
      address={
        <>
          <Skeleton />
          <Skeleton />
        </>
      }
      rooms={null}
    />
  );
}
