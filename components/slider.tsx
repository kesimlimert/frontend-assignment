"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Quote from "@/public/quote.svg";

interface Reference {
  body: string;
  user_name: string;
  user_location: string;
}

type SliderComponentProps = {
  references: Reference[];
};

export default function SliderComponent({ references }: SliderComponentProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          bottom: "-60px",
          left: "-16px",
          position: "absolute",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {references.map((reference: Reference, index: number) => (
        <div key={index} className="mt-8 flex">
          <div className="bg-light max-w-[525px] p-6 pt-8">
            <div className="flex items-start gap-2">
              <Image src={Quote} alt="quote" className="-mt-3" />
              <p className="mb-4 text-xs md:text-md-xs lg:text-lg-xs">
                {reference.body}
              </p>
            </div>
            <h3 className="font-bold text-sm md:text-md-sm lg:text-lg-sm">
              {reference.user_name}
            </h3>
            <p className="text-xs md:text-md-xs lg:text-lg-xs">
              {reference.user_location}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
