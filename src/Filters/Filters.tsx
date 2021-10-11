import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import React, { Dispatch, SetStateAction } from "react";
import { IFilters } from "../types";
import Stepper from "./Stepper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

interface FiltersProps {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  return (
    <Card
      data-testid="filters"
      sx={{
        p: 2,
        mx: "auto",
        width: "fit-content",
        transform: "translateY(50%)",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{
          xs: 2,
          sm: 4,
        }}
        display="flex"
        alignItems="center"
      >
        <Tooltip title="Minimum hotel star rating">
          <Rating
            value={filters.rating}
            onChange={(event, newValue) => {
              setFilters({ ...filters, rating: newValue ?? 0 });
            }}
          />
        </Tooltip>
        <Stack direction="row" display="flex" alignItems="center">
          <Typography sx={{ mr: 1 }}>Adults: </Typography>
          <Stepper
            name="adults"
            value={filters.adults}
            setValue={(newValue) => {
              setFilters({ ...filters, adults: newValue });
            }}
          />
        </Stack>
        <Stack direction="row" display="flex" alignItems="center">
          <Typography sx={{ mr: 1 }}>Children: </Typography>
          <Stepper
            name="children"
            value={filters.children}
            setValue={(newValue) => {
              setFilters({ ...filters, children: newValue });
            }}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
