"use client";
import ReactPlayer from "react-player";

export interface VideoDto {
  src: string;
  loop: boolean;
  width?: string;
  class?: string;
  height?: string;
  imageUrl: string;
  colors?: Record<string, any>;
}
export default function Video(dto: VideoDto) {
  return (
    <ReactPlayer
      width={dto.width}
      height={dto.height}
      src={dto.src}
      loop={dto.loop}
      className={dto.class}
      muted={dto.loop}
      playing={dto.loop}
    />
  );
}
