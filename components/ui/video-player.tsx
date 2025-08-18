import { CldVideoPlayer } from "next-cloudinary";

export interface VideoDto {
  src: string;
  loop: boolean;
  width?: string;
  height?: string;
  imageUrl: string;
  colors?: Record<string, any>;
}
export default function Video(dto: VideoDto) {
  return (
    <div>
      <CldVideoPlayer
        width={dto.width || '1920'}
        height={dto.height || '1080'}
        src={dto.src}
        loop={dto.loop}
      />
    </div>
  );
}
