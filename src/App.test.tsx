import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders filters and list of hotels", async () => {
  const { findAllByTestId, findByTestId } = render(<App />);
  expect(await findByTestId("filters")).toBeInTheDocument();
  const hotelCards = await findAllByTestId("hotel-card");
  expect(hotelCards.length).toBe(2);
});
