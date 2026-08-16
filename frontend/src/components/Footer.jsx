import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { LOCATIONS, TOOTH_COLORS } from "@/data";

const ease = [0.76, 0, 0.24, 1];

export const Footer = () => {
  return (
      <footer
          data-testid="site-footer"
          className="relative overflow-hidden border-t border-white/10 bg-sky-surface px-5 pt-20 pb-10 sm:px-8 lg:px-14"
      >
        <div
            className="aura absolute -bottom-[20vw] left-1/2 h-[40vw] w-[40vw] -translate-x-1/2 opacity-15"
            aria-hidden
        >
          <div className="h-full w-full rounded-full bg-tooth-teal" />
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          {/* CTA */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="mb-16 text-center"
          >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Ready when you are
          </span>

            <h2 className="mt-6 font-serif text-4xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
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
                      className="inline-flex items-center gap-2.5 rounded-full bg-white py-4 pl-5 pr-6 text-sm font-semibold text-black transition-colors duration-300 hover:bg-tooth-teal"
                  >
                    <Phone className="h-4 w-4" />
                    {loc.area} · {loc.phoneDisplay}
                  </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            {/* Dental Centre Branding */}
            <div className="flex items-center gap-3">
              <img
                  src="/assets/logo.png"
                  alt="Sky Dental Wellness Centre"
                  className="h-10 w-auto object-contain"
              />
            </div>

            {/* Decorative Tooth Colors */}
            <span className="flex -space-x-1.5">
            {TOOTH_COLORS.map((color, i) => (
                <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-full ring-2 ring-sky-surface"
                    style={{ background: color }}
                />
            ))}
          </span>

            {/* Copyright & Developer Branding */}
            <div className="flex flex-col items-center gap-1 sm:items-end">
              <p className="text-center text-xs text-zinc-500 sm:text-right">
                © {new Date().getFullYear()} The Sky Dental Wellness Centre,
                Hyderabad.
                <br className="hidden sm:block" /> All rights reserved.
              </p>

              <p className="text-center text-[11px] text-zinc-600 sm:text-right">
                Built &amp; Maintained by{" "}
                <a
                    href="https://raredigital.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  RaRe Digital Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};