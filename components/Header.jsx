"use client";

import { useState } from "react";
import Image from "next/image";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Header = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <section className="mx-2.5 lg:mx-[70px] xl:mx-auto mt-8 max-w-screen-xl">
      <h1 className="font-medium text-4xl">Discover, Share, Connect</h1>
      <p className="uppercase font-semibold text-xs text-gray-600 mt-4 mb-3">
        See our latest news
      </p>

      <div className="relative">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-white z-20"
        />
        <div className="w-full md:h-[50vh] h-[40vh] flex overflow-hidden relative m-auto">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative z-10 w-full h-full"
          >
            {images.map((image, index) => {
              if (index === currentSlide) {
                return (
                  <Image
                    key={image.id}
                    src={image.src}
                    alt="banner"
                    fill={true}
                    className="animate-fadeIn object-cover rounded-xl"
                  />
                );
              }
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-white z-20"
        />

        <div className="relative flex justify-center p-2">
          {images.map((_, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-3.5 w-3.5 bg-black rounded-full mx-1 mb-2 cursor-pointer"
                    : "h-3.5 w-3.5 bg-white rounded-full mx-1 mb-2 cursor-pointer border-solid border-2 border-black"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
