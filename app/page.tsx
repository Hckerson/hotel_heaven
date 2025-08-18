import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Video from "@/components/ui/video-player";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
        <div className="w-full mx-auto">
            <Video src="landing-video" loop={true} imageUrl="bed-double.svg"/>
        </div>
    </div>
  );
}