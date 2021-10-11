import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { IRoom } from "../types";

interface RoomProps {
  room: IRoom;
}

export default function RoomDetails({ room }: RoomProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ px: { xs: 1, sm: 2 }, py: 2 }}
      spacing={2}
    >
      <Stack
        direction={{ xs: "row", sm: "column" }}
        spacing={{
          xs: 2,
          sm: 0,
        }}
        width={{ sm: 200, xs: "100%" }}
        minWidth={{ sm: 200, xs: "100%" }}
      >
        <Typography
          sx={{ fontWeight: "bold" }}
          fontSize="1.2rem"
          width={{ xs: "50%", sm: "100%" }}
        >
          {room.name}
        </Typography>
        <Typography>
          Adults: {room.occupancy.maxAdults}
          <br />
          Children: {room.occupancy.maxChildren}
        </Typography>
      </Stack>
      <div>{room.longDescription}</div>
    </Stack>
  );
}
