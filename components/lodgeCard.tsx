import clsx from "clsx";
import Image from "next/image";
import { ChevronDown, Icon } from "lucide-react";
import { Landmark, House, Building, Building2 } from "lucide-react";

interface CardData {
  imgUrl: string;
  svg: string;
  name: string;
  available: number;
}

export default function LodgeCard({ cardData }: { cardData: CardData }) {
  const svg = cardData.svg;
  const iconmap = {
    villa: Landmark,
    apartment: House,
    resort: Building,
    cottage: Building2,
  };
  const ICON = iconmap[svg as keyof typeof iconmap];
  return (
    <div className={clsx("relative grid gap-y-3")}>
      <div className="flex relative">
        <div className="flex flex-col space-y-2">
          <span className="text-lg font-semibold">{cardData.name}</span>
          <div className="flex space-x-3">
            <span className="">
              <ICON />
            </span>
            <p className="text-start">{cardData.available} available </p>
          </div>
        </div>
        <div className="absolute h-full right-0 flex items-center ">
          <div className="bg-slate-50 shadow-lg rounded-lg p-2 border border-white/80 hover:translate-y-1 transition-transform ease-in-out duration-200">
            <ChevronDown className="" />
          </div>
        </div>
      </div>
      <div className="w-full  box-border rounded-2xl h-[175px]">
        <Image
          width={500}
          height={250}
          style={{ maxHeight: "100%" }}
          className="rounded-2xl"
          alt={`Image of a ${cardData.name}`}
          src={cardData.imgUrl}
        ></Image>
      </div>
    </div> 
  );
}
