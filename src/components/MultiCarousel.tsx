"use client";
import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel({ children }: { children: ReactNode }) {
  return (
    <Carousel
      itemClass="m-2"
      responsive={responsive}
      swipeable={true}
      ssr={true}
      centerMode
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={8000}
    >
      {children}
    </Carousel>
  );
}
