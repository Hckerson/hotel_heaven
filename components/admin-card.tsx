import clsx from "clsx";
import Image from "next/image";

export interface AdminDto {
  img: string;
  body: string;
  role: string;
  name: string;
}

export default function AdminExpo({ adminDto }: { adminDto: AdminDto }) {
  return (
    <div className="grid lg:px-[94px] text-stone-400 text-center justify-center gap-y-[50px] ">
      <div className="flex justify-center">
        <div
          style={{ maxWidth: "50ch" }}
          className="text-xl font-medium tracking-tight text-center w-full"
        >
          {adminDto.body}
        </div>
      </div>
      <div>
        <span className="text-lg font-semibold text-stone-300">
          {adminDto.name}
        </span>
        <p className="text-xs">{adminDto.role}</p>
      </div>
    </div>
  );
}
