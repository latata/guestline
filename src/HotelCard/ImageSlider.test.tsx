import { render, fireEvent } from "@testing-library/react";
import ImageSlider from "./ImageSlider";
import { IHotelImage } from "../types";

const images: IHotelImage[] = [
  {
    url: "https://guestline.image/image1.jpg",
  },
  {
    url: "https://guestline.image/image2.jpg",
  },
];
describe("ImageSlider", () => {
  test("renders and is browse images", async () => {
    const { findByAltText, findByLabelText } = render(
      <ImageSlider images={images} name="Test Hotel" />
    );

    const image1 = await findByAltText("Test Hotel - Image 1");
    expect(image1).toBeInTheDocument();
    expect(image1).toBeVisible();
    const image2 = await findByAltText("Test Hotel - Image 2");
    expect(image2).toBeInTheDocument();
    expect(image2).not.toBeVisible();

    fireEvent.click(await findByLabelText("Next image"));

    expect(image2).toBeVisible();
    expect(image1).not.toBeVisible();

    fireEvent.click(await findByLabelText("Next image"));

    expect(image1).toBeVisible();
    expect(image2).not.toBeVisible();

    fireEvent.click(await findByLabelText("Previous image"));

    expect(image2).toBeVisible();
    expect(image1).not.toBeVisible();
  });

  test("renders skeleton if no image provided", async () => {
    const { findByTestId } = render(<ImageSlider name="Test Hotel" />);

    expect(await findByTestId("image-slider-skeleton")).toBeInTheDocument();
  });
});
