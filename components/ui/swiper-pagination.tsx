import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Nav({
  direction,
  action,
}: {
  direction: string;
  action: () => void;
}) {
  const swiper = useSwiper();
  const icons = {
    left: ChevronLeft,
    right: ChevronRight,
  };
  const ICON = direction == 'left'? icons.left : icons.right

  return (
    <button
      type="button"
      id={direction}
      onClick={() => {
        direction == "left" ? swiper.slidePrev() : swiper.slideNext();
        action();
      }}
      className=" size-16 prev  shadow-lg shadow-stone-700/40 rounded-xl inset-shadow-sm inset-shadow-stone-700/70  flex items-center justify-center "
    >
      <ICON className="size-8 text-stone-500 " />
    </button>
  );
}
