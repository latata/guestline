import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface StepperProps {
  name: string;
  value: number;
  setValue: (newValue: number) => void;
}

export default function Stepper({ name, value, setValue }: StepperProps) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label={`${name} - less`}
        sx={{ borderRadius: "50%", p: 0.5, minWidth: "unset" }}
        onClick={() => {
          setValue(Math.max(0, value - 1));
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Box display="flex" alignItems="center" aria-label={name}>
        {value}
      </Box>
      <IconButton
        aria-label={`${name} - more`}
        sx={{ borderRadius: "50%", p: 0.5, minWidth: "unset" }}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
