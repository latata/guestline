import React, { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import HotelList from "./HotelList/HotelList";
import Filters from "./Filters/Filters";
import { IFilters } from "./types";
import Box from "@mui/material/Box";

import hotelImage from "./hero-image.jpeg";
import Container from "@mui/material/Container";

const queryClient = new QueryClient();

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  });
  const [filters, setFilters] = useState<IFilters>({
    rating: 3,
    adults: 2,
    children: 0,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundImage: `url(${hotelImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mb: { sm: 10, xs: 12 },
          }}
          display="flex"
          alignItems="flex-end"
          height={{ xs: 100, sm: 300 }}
        >
          <Filters filters={filters} setFilters={setFilters} />
        </Box>
        <Container maxWidth="lg" data-testid="hotel-list">
          <HotelList filters={filters} />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
