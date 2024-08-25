"use client";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./Carousel.css";
const OPTIONS: EmblaOptionsType = {
  active: true,
  loop: true,
  slidesToScroll: 1,
};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Carousel() {
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}
