import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Nav({direction}:{direction: string}) {
  const swiper = useSwiper();
  const icons = {
    left: ChevronLeft,
    right: ChevronRight,
  };
  let ICON;
  if (direction == "left") {
    ICON = icons.left;
  } else {
    ICON = icons.right;
  }
  return (
    <button
      type="button"
      id={direction}
      onClick={() =>
        direction == "left" ? swiper.slidePrev() : swiper.slideNext()
      }
      className=" size-16 prev shadow-lg shadow-stone-700/40 rounded-xl inset-shadow-sm inset-shadow-stone-700/70  flex items-center justify-center "
    >
      <ICON className="size-8 text-stone-500" />
    </button>
  );
}
