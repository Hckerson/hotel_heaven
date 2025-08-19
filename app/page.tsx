"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { flex } from "@/components/fonts/fonts";
import Video from "@/components/ui/video-player";

export default function Home() {
  useEffect(() => {
    let width = window.innerWidth;
  }, []);
  return (
    <div className={clsx("flex flex-col w-full relative box-border",flex.className )}>
      <div className="w-full mx-auto relative max-h-screen">
        <Video
          src="landing-video.mp4"
          loop={true}
          class="object-fill max-h-screen w-full"
          imageUrl="bed-double.svg"
        />
        <div className="absolute w-full mx-auto top-[45%] flex text-amber-400 justify-center flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="text-7xl font-bold ">Hotel Serena</p>
            <p>Where Comfort Meets Elegance</p>
          </div>
          <Link href={`/booking`} className="py-3 px-5 mt-5 text-stone-400  bg-black rounded-2xl text-lg">
            Book Now
          </Link>
        </div>
      </div>
      <div className="box-border  relative h-[580px] ">
        <div className="absolute inset-0 bg-[url(/trc-pattern.svg)] bg-cover bg-center opacity-20" />
        <div className="flex relative z-10 items-center w-full h-full justify-center gap-[64px]">
          <p className="flex-1 italic pl-16 pr-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
            velit tempus, dictum massa a, lacinia quam. Nunc aliquam justo odio,
            et fringilla nunc auctor ut. Donec dapibus facilisis nunc a pretium.
            Nam nulla justo, ornare et laoreet non, rhoncus molestie massa. Duis
            vitae molestie elit. Quisque eget pretium mauris. Etiam at lobortis
            nulla, ut viverra quam. Vivamus nunc turpis, placerat vitae
            pellentesque et, varius at dolor. Donec eu dui sit amet urna iaculis
            vulputate. Pellentesque luctus, nunc in fermentum feugiat, diam
            ipsum suscipit dolor, sit amet commodo felis nunc non turpis.
            Praesent id porttitor nisl, in mollis ex. Maecenas ut vestibulum
            nisi. Nullam scelerisque consequat nibh in ultricies.
          </p>
          <div className="flex-1 ">
            <div className="flex items-center">
              <Image
                src={`/room.jpg`}
                alt="room"
                className="rounded-4xl"
                width={300}
                height={450}
              ></Image>
              <div className="grid gap-y-3 pl-8 mb-12">
                <div className="flex flex-col space-y-1">
                  <p className="text-4xl text-blue-600 font-semibold">Deluxe Suite</p>
                  <p className="text-base font-semibold text-stone-500">2-3 Guest</p>
                </div>
                <div className="max-w-[270px] rounded-3xl shadow-xl text-white cursor-pointer overflow-hidden group transition-all duration-300">
                  <div className="p-3  rounded-3xl bg-blue-400 transition-all duration-300 h-[52px] group-hover:h-[120px]">
                    <h3 className="text-xl text-center ">Amenities</h3>
                    <p className="text-sm opacity-0 mt-2 group-hover:opacity-100 text-center p-3 transition-opacity duration-300">
                      Personal care, Coffee kit, Tissue box 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border  relative h-[580px] ">
        <div className="absolute inset-0 bg-[url(/trc-pattern.svg)] bg-cover bg-center opacity-20" />
        <div className="flex  relative z-10 items-center w-full h-full justify-center gap-[64px]">
          <p className="flex-1 italic pl-16 pr-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
            velit tempus, dictum massa a, lacinia quam. Nunc aliquam justo odio,
            et fringilla nunc auctor ut. Donec dapibus facilisis nunc a pretium.
            Nam nulla justo, ornare et laoreet non, rhoncus molestie massa. Duis
            vitae molestie elit. Quisque eget pretium mauris. Etiam at lobortis
            nulla, ut viverra quam. Vivamus nunc turpis, placerat vitae
            pellentesque et, varius at dolor.
          </p>
          <div className="flex-1 ">
            <div className="flex items-center">
              <Image
                src={`/bed-single.jpg`}
                alt="room"
                className="rounded-4xl"
                width={300}
                height={450}
              ></Image>
              <div className="grid gap-y-3 pl-8 mb-12">
                <div className="flex flex-col space-y-1">
                  <p className="text-4xl text-blue-600 font-semibold">Deluxe Suite</p>
                  <p className="text-base font-semibold text-stone-500">2-3 Guest</p>
                </div>
                <div className="max-w-[270px] rounded-3xl shadow-xl text-white cursor-pointer overflow-hidden group transition-all duration-300">
                  <div className="p-3  rounded-3xl bg-blue-400 transition-all duration-300 h-[52px] group-hover:h-[120px]">
                    <h3 className="text-xl text-center ">Amenities</h3>
                    <p className="text-sm opacity-0 mt-2 group-hover:opacity-100 text-center p-3 transition-opacity duration-300">
                      Personal care, Coffee kit, Tissue box 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
