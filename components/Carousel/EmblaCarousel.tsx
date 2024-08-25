"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.css";
import Image from "next/image";

const TWEEN_FACTOR_BASE = 0.84;

interface BandMembersType {
  index: any;
  name: string;
  role: string;
  image: string;
}

const BandMembers: BandMembersType[] = [
  {
    index: "ed66f913-2fd5-4549-a9ea-287c6b2ee3a7",
    name: "Dan Reynolds",
    role: "Lead Vocalist",
    image:
      "https://res.cloudinary.com/dzhiauyws/image/upload/v1724623125/Imagine%20Dragons/danreynolds_nhkdch.webp",
  },
  {
    index: "9417a439-3296-4b26-bd7d-0ff258446982",
    name: "Wayne Sermon",
    role: "Guitarist",
    image:
      "https://res.cloudinary.com/dzhiauyws/image/upload/v1724623125/Imagine%20Dragons/waynesermon_mf2kjs.webp",
  },
  {
    index: "9cf11c3d-07ae-4a5f-9fcc-af564ec8c0df",

    name: "Ben McKee",
    role: "Bassist",
    image:
      "https://res.cloudinary.com/dzhiauyws/image/upload/v1724623125/Imagine%20Dragons/BenMcKee_nurqtt.webp",
  },
  {
    index: "8b6a771d-53eb-4451-9c14-64aea685c4f2",
    name: "Daniel Platzman",
    role: "Drummer",
    image:
      "https://res.cloudinary.com/dzhiauyws/image/upload/v1724623125/Imagine%20Dragons/DanielPlatzman_xk5aco.webp",
  },
];

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {BandMembers.map(({ index, name, image, role }) => (
            <div className="embla__slide" key={index}>
              <Image
                width={500}
                height={1000}
                className="embla__slide__img"
                src={`${image}`}
                alt={`${name}, ${role}`}
              />
              <div className="embla__slide__info">
                <h3 className="embla__slide__info__name">{name}</h3>
                <p className="embla__slide__info__role">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
