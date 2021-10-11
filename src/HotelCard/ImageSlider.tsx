import Box from "@mui/material/Box";
import React, { useState } from "react";
import { IHotelImage } from "../types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styled from "@emotion/styled";
import { Skeleton, useTheme } from "@mui/material";

interface ImageSliderProps {
  images?: IHotelImage[];
  name: string;
}

const StyledButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

const BackButton = styled(StyledButton)`
  left: 0;
`;

const ForwardButton = styled(StyledButton)`
  right: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function ImageSlider({ images, name }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: 266,
        },
        height: 200,
        position: "relative",
      }}
    >
      {!images ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          data-testid="image-slider-skeleton"
        />
      ) : (
        <>
          {images.map((image, index) => (
            <StyledImage
              alt={`${name} - Image ${index + 1}`}
              key={image.url}
              loading="lazy"
              src={image.url}
              style={{
                display: index === activeIndex ? "initial" : "none",
              }}
            />
          ))}
          {images.length > 1 && (
            <>
              <BackButton
                aria-label="Previous image"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0 ? images.length - 1 : activeIndex - 1
                  )
                }
              >
                <ArrowBackIosIcon
                  sx={{
                    fill: "#fff",
                  }}
                />
              </BackButton>
              <ForwardButton
                aria-label="Next image"
                style={{
                  backgroundColor: `${theme.palette.background.default}40`,
                }}
                onClick={() =>
                  setActiveIndex(
                    activeIndex === images.length - 1 ? 0 : activeIndex + 1
                  )
                }
              >
                <ArrowForwardIosIcon
                  sx={{
                    fill: "#fff",
                  }}
                />
              </ForwardButton>
            </>
          )}
        </>
      )}
    </Box>
  );
}
