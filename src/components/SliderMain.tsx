"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from "react-responsive";

const sliderContent = [
  { id: 1, imageLink: "/home-slider/1.jpg" },
  { id: 2, imageLink: "/home-slider/2.jpg" },
  { id: 3, imageLink: "/home-slider/3.jpg" },
  { id: 4, imageLink: "/home-slider/4.jpg" },
  { id: 5, imageLink: "/home-slider/5.jpg" },
];

export default function SliderMain() {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
    pauseOnFocus: true,
    swipeToSlide: false,
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }
  return (
    <div>
      {" "}
      <Slider {...settings}>
        {sliderContent.map((item) => {
          return (
            <div key={item.id} className="rounded-md px-2 md:p-10">
              <Image
                priority
                src={item.imageLink}
                alt="logo"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
