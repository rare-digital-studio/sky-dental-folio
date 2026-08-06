import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SPECIALTIES, GENERAL_SERVICES } from "@/data";

const ease = [0.76, 0, 0.24, 1];

const BentoCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease, delay: index * 0.08 }}
    data-testid={`specialty-card-${index}`}
    className={`group relative overflow-hidden rounded-3xl bg-sky-surface border border-white/5 p-8 sm:p-10 min-h-[240px] flex flex-col justify-between ${item.span}`}
  >
    <div
      className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-2/3 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
      style={{ background: item.accent }}
    />
    <div className="relative flex items-start justify-between">
      <span
        className="h-3 w-3 rounded-full"
        style={{ background: item.accent }}
      />
      <ArrowUpRight className="h-6 w-6 text-zinc-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
    </div>
    <div className="relative">
      <h3 className="font-serif text-3xl sm:text-4xl leading-tight">
        {item.title}
      </h3>
      <p className="mt-3 text-zinc-400 max-w-md">{item.desc}</p>
    </div>
  </motion.div>
);

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative px-5 sm:px-8 lg:px-14 py-24 sm:py-32 bg-sky-bg"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-semibold">
              What we do
            </span>
            <h2 className="mt-5 font-serif text-4xl sm:text-6xl tracking-tight leading-none">
              Specialist care,
              <br />
              full spectrum.
            </h2>
          </div>
          <p className="max-w-sm text-zinc-400">
            Four resident specialists and a complete range of everyday dentistry
            — so your whole family is cared for in one place.
          </p>
        </motion.div>

        {/* Bento specialties */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {SPECIALTIES.map((item, i) => (
            <BentoCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* General services list */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-semibold mb-8"
          >
            General & preventive services
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
            {GENERAL_SERVICES.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                data-testid={`service-item-${i}`}
                className="group flex items-center justify-between gap-4 py-5 border-b border-white/10 hover:pl-3 transition-[padding] duration-300"
              >
                <span className="flex items-center gap-4">
                  <span className="font-serif text-sm text-zinc-600 w-7">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-zinc-200 group-hover:text-white transition-colors">
                    {s}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-zinc-700 group-hover:text-tooth-teal transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
