"use client";
import "swiper/css";
import Swiper from "swiper";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      speed: 400,
      spaceBetween: 100,
    });
  }, []);
  return (
    <div className="swiper mt-16  ">
      <div className="swiper-wrapper">
        <div className=" size-36">Slide 1</div>
        <div className=" size-36">Slide 2</div>
        <div className=" size-36">Slide 3</div>
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
}
