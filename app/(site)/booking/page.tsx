"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import RoomCard from "@/components/roomCard";
import LodgeCard from "@/components/lodgeCard";
import { MapPin, UsersRound, UserRound, CalendarDays } from "lucide-react";
import {
  lodgeType,
  houseData,
  hotelData,
  defaultyShowedCountry,
} from "@/lib/placeholder_data";

export default function Booking() {
  const [location, setLocation] = useState<string>("Find Location");
  const [guest, setGuest] = useState<string>("Add Dates");
  const [date, setDate] = useState<string>("1 guest, 1 room");
  const [lodge, setLodge] = useState<string>(lodgeType[0]);
  const [country, setCountry] = useState<string>(defaultyShowedCountry[0]);

  const changeLocation = () => {};
  const changeGuest = () => {};
  const changeDate = () => {};
  return (
    <main className="bg-white box-border">
      <section className=" max-h-screen relative">
        <div className="absolute inset-0 p-2">
          <Image
            src={`/imgs/big-room.jpg`}
            height={1980}
            width={1080}
            alt="background image"
            className="inset-0 w-full h-full rounded-lg"
          ></Image>
        </div>
        <div className="w-full box-border  p-6 rounded-lg h-screen  flex items-end relative">
          <div className="grid gap-y-2 w-full">
            <span className="text-5xl font-semibold text-white">
              Find Your Best Staycation
            </span>
            <div className="bg-white rounded-lg flex flex-col space-y-3 p-6">
              <div className="grid lg:grid-cols-3 gap-x-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-base font-semibold">Location</span>

                  <div className="bg-slate-100 p-2 rounded-xl items-center  flex space-x-3">
                    <span>
                      <MapPin className="text-stone-500" />
                    </span>
                    <div>
                      <input
                        type="text"
                        className="text-stone-500 py-1"
                        value={location}
                        onChange={changeLocation}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-base font-semibold">
                    Check-in and Check-out Date
                  </span>

                  <div className="bg-slate-100 p-2 rounded-xl items-center  flex space-x-3">
                    <span>
                      <CalendarDays className="text-stone-500" />
                    </span>
                    <div>
                      <input
                        type="text"
                        className="text-stone-500 py-1"
                        value={date}
                        onChange={changeDate}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-base font-semibold">
                    Guests and Rooms
                  </span>

                  <div className="bg-slate-100 p-2 rounded-xl items-center  flex space-x-3">
                    <span>
                      <UsersRound className="text-stone-500" />
                    </span>
                    <div>
                      <input
                        type="text"
                        className="text-stone-500 py-1"
                        value={guest}
                        onChange={changeGuest}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-x-4 flex items-center">
                <span className="font-semibold">Filter:</span>
                <div className="flex space-x-2">
                  {lodgeType.map((type) => {
                    return (
                      <button
                        key={type}
                        className={clsx(
                          "rounded-3xl font-semibold  py-2 px-4",
                          type == lodge
                            ? "bg-black text-white"
                            : "bg-slate-100 text-black",
                        )}
                        onClick={() => setLodge(type)}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full pt-6">
        <div style={{ maxWidth: "1280px" }}>
          <div className="grid gap-y-4">
            <section className="box-border w-full px-6 py-5 flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <span className="text-3xl font-semibold">
                  Discover your destination
                </span>
                <p>
                  {" "}
                  Explore our range of property types for every {`traveler's `}{" "}
                  experience
                </p>
              </div>
              <div className="grid gap-x-3 lg:grid-cols-4">
                {houseData.map((house) => {
                  return <LodgeCard key={house.name} cardData={house} />;
                })}
              </div>
            </section>
            <section className="box-border w-full px-6 py-5 flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <span className="text-3xl font-semibold">
                  Top Trending Hotels Worldwide
                </span>
                <p>
                  {" "}
                  Discover the most trending website for an unforgettable
                  experience
                </p>
                <div className="flex space-x-2 pt-4">
                  {defaultyShowedCountry.map((nation) => {
                    return (
                      <button
                        key={nation}
                        className={clsx(
                          "rounded-lg font-semibold  py-2 px-4",
                          nation == country
                            ? "bg-black text-white"
                            : "bg-slate-100 text-black",
                        )}
                        onClick={() => setCountry(nation)}
                      >
                        {nation}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="grid gap-x-3 lg:grid-cols-4">
                {hotelData.map((hotel) => {
                  return <RoomCard key={hotel.name} cardData={hotel} />;
                })}
              </div>
            </section>
            <section className="box-border w-full px-6 py-5 flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <span className="text-3xl font-semibold">
                  Most visited hotel this month
                </span>
                <p>
                  {" "}
                  Trending exceptional hospitally that captivated travellers
                  this month
                </p>
              </div>
              <div className="grid gap-x-3 lg:grid-cols-4">
                {hotelData.map((hotel) => {
                  return <RoomCard key={hotel.name} cardData={hotel} />;
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
