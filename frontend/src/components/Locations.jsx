import { motion } from "framer-motion";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LOCATIONS } from "@/data";

const ease = [0.76, 0, 0.24, 1];

export const Locations = () => {
  return (
    <section
      id="locations"
      data-testid="locations-section"
      className="relative px-5 sm:px-8 lg:px-14 py-24 sm:py-32 bg-sky-bg"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-semibold">
            Visit us
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
            Two units.
            <br />
            <span className="italic text-zinc-400">One standard of care.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.unit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.12 }}
              data-testid={`location-card-${i}`}
              className="group relative overflow-hidden rounded-3xl bg-sky-surface border border-white/5 p-8 sm:p-12 flex flex-col"
            >
              <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{ background: i === 0 ? "#00E5FF" : "#9D00FF" }} />
              <div className="relative flex items-center justify-between">
                <span className="font-serif text-6xl sm:text-7xl text-zinc-700">
                  {loc.unit}
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-zinc-500">
                  {loc.area}
                </span>
              </div>

              <div className="relative mt-10 flex items-start gap-3 text-zinc-300">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-zinc-500" />
                <p className="leading-relaxed">{loc.address}</p>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${loc.phone}`}
                  data-testid={`location-call-${i}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-5 pr-6 py-3.5 text-sm font-semibold hover:bg-tooth-teal transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  {loc.phoneDisplay}
                </a>
                <a
                  href={loc.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`location-map-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold hover:bg-white/5 transition-colors duration-300"
                >
                  Get directions
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
