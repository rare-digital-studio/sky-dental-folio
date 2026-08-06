import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { LOCATIONS, TOOTH_COLORS } from "@/data";

const ease = [0.76, 0, 0.24, 1];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative overflow-hidden border-t border-white/10 bg-sky-surface px-5 sm:px-8 lg:px-14 pt-20 pb-10"
    >
      <div className="aura w-[40vw] h-[40vw] -bottom-[20vw] left-1/2 -translate-x-1/2 opacity-15" aria-hidden>
        <div className="w-full h-full rounded-full bg-tooth-teal" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-semibold">
            Ready when you are
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
            Let's care for your
            <br />
            <span className="italic" style={{ color: "#00E5FF" }}>
              smile, today.
            </span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((loc, i) => (
              <a
                key={loc.unit}
                href={`tel:${loc.phone}`}
                data-testid={`footer-call-${i}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-5 pr-6 py-4 text-sm font-semibold hover:bg-tooth-teal transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                {loc.area} · {loc.phoneDisplay}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.jpeg"
              alt="Sky Dental Wellness Centre"
              className="h-10 w-auto object-contain"
            />
          </div>
          <span className="flex -space-x-1.5">
            {TOOTH_COLORS.map((c, i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-full ring-2 ring-sky-surface"
                style={{ background: c }}
              />
            ))}
          </span>
          <p className="text-xs text-zinc-500 text-center sm:text-right">
            © {new Date().getFullYear()} The Sky Dental Wellness Centre, Hyderabad.
            <br className="hidden sm:block" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
