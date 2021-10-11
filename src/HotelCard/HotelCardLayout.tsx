import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

interface HotelCardLayoutProps {
  image: React.ReactNode;
  name: React.ReactNode;
  rating: React.ReactNode;
  address: React.ReactNode;
  rooms: React.ReactNode;
  testId?: string;
}

export default function HotelCardLayout({
  image,
  name,
  rating,
  address,
  rooms,
  testId,
}: HotelCardLayoutProps) {
  return (
    <Card
      sx={{
        my: { xs: 1, sm: 2 },
      }}
      data-testid={testId}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          px: {
            sm: 2,
            xs: 0,
          },
          py: {
            sm: 2,
            xs: 0,
          },
        }}
      >
        {image}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          display="flex"
          sx={{ flex: 1 }}
        >
          <Stack px={1} sx={{ flex: 1, px: { xs: 1, sm: 2 } }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Typography fontSize="1.5rem">{name}</Typography>

              {rating}
            </Stack>
            <Typography fontSize="1.2rem">{address}</Typography>
          </Stack>
        </Stack>
      </Stack>
      {rooms}
    </Card>
  );
}
