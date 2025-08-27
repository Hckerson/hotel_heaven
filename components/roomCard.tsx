import clsx from "clsx";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

interface CardData {
  imgUrl: string;
  name: string;
  location: string;
  star: string;
  review: string;
  price: string;
  discountedPrice: string | null;
}
export default function RoomCard({ cardData }: { cardData: CardData }) {
  return (
    <div className={clsx("relative grid gap-y-3")}>
      <div className="w-full h-[240px] box-border rounded-2xl">
        <Image
          width={500}
          height={250}
          style={{ maxHeight: "100%" }}
          className="rounded-2xl h-[240px]"
          alt={`Image of a ${cardData.name}`}
          src={cardData.imgUrl}
        ></Image>
      </div>
      <div className="flex flex-col relative space-y-3">
        <div className="flex flex-col ">
          <span className="text-lg font-semibold">{cardData.name}</span>
          <div className="flex space-x-2 text-stone-500 items-center">
            <span className="">
              <MapPin className="size-5" />
            </span>
            <p className="">{cardData.location} </p>
          </div>
          <div className="flex pt-1 space-x-2 text-sm text-stone-500 items-center">
            <span className="">
              <Star className="size-5" />
            </span>
            <p className="" style={{verticalAlign:"center"}}>
              {`${cardData.star} (${cardData.review} Reviews)`}{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col   ">
          <div className="flex space-x-2 items-center">
            {cardData.discountedPrice && (
              <span className="first:text-lg font-semibold">
                ${cardData.discountedPrice}
              </span>
            )}
            <p className="first:text-lg first:font-semibold">${cardData.price}</p>
          </div>
          <p className="text-xs text-stone-500">Include taxes and fees</p>
        </div>
      </div>
    </div>
  );
}
