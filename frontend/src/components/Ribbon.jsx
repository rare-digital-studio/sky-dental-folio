import Marquee from "react-fast-marquee";
import { MARQUEE_ITEMS } from "@/data";

export const Ribbon = () => {
  return (
    <section
      data-testid="marquee-ribbon"
      className="relative border-y border-white/10 py-8 sm:py-10 bg-sky-surface"
    >
      <Marquee speed={38} gradient={false} autoFill>
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="ribbon-item text-4xl sm:text-6xl md:text-7xl text-zinc-200/90 px-16 sm:px-24">
              {item}
            </span>
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: ["#FF5E00", "#00E5FF", "#FFD700", "#FF204E", "#9D00FF", "#2F6BFF", "#00FF66", "#B5651D"][i % 8],
              }}
            />
          </span>
        ))}
      </Marquee>
    </section>
  );
};
