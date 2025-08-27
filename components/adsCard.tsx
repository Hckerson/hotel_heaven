import clsx from "clsx";
import Image from "next/image";
import { BedDouble } from "lucide-react";

interface AdsData {
  startDate: string;
  endDate: string;
  percentage: string;
  maxChar: string;
  heading: string;
  imageSrc: string;
}

export default function AdsCard({
  adsData,
  color,
}: {
  adsData: AdsData;
  color?: string;
}) {
  return (
    <div className="w-full box-border rounded-lg relative overflow-hidden">
      <div className="inset-0 absolute ">
        <Image
          style={{aspectRatio: '16/9'}}
          height={300}
          width={600}
          alt="Ads promo"
          src={adsData.imageSrc}
           className="inset-0 w-full object-cover h-full rounded-lg"
        ></Image>
      </div>
      <div className="p-6 grid gap-y-6 w-full box-border relative">
        <div className="flex justify-between">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
            <BedDouble className={clsx("h-5 w-5 ", color)} />
          </div>
          <div>
            valid only on{" "}
            {`${adsData.startDate} - ${adsData.endDate} ${new Date().getFullYear()}`}
          </div>
        </div>
        <div className="flex flex-col space-1-4 justify-start">
          <p style={{maxWidth: adsData.maxChar}} className="text-lg text-stone-600 font-medium">
            {adsData.heading}
          </p>
          <span className="text-6xl font-semibold text-stone-600">
            {`${adsData.percentage}%`}
          </span>
        </div>
        <p className="text-xs font-normal text-stone-500 ">With Terms and Condition</p>
      </div>
    </div>
  );
}
