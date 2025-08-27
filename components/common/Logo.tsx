import clsx from "clsx";
import { PenTool } from "lucide-react";
import { BedDouble } from "lucide-react";

export function Logo({
  styles = "stone-400",
  color = "",
}: {
  styles?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
          <BedDouble className={clsx("h-5 w-5 ", color)} />
        </div>
        <div
          className={clsx(
            "absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse",
            `bg-${styles}`,
          )}
        ></div>
      </div>
      <div className="flex flex-col">
        <span
          className={clsx(
            "font-bold text-xl  text-foreground leading-none",
            `text-${styles}`,
          )}
        >
          Hotel Serena
        </span>
        <span
          className={clsx(
            "text-xs text-muted-foreground  leading-none",
            `text-${styles}`,
          )}
        >
          Home brought to you anywhere
        </span>
      </div>
    </div>
  );
}
