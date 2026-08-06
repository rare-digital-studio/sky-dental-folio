import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { LOCATIONS, TOOTH_COLORS } from "@/data";

const ease = [0.76, 0, 0.24, 1];

const lineParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const lineChild = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease } },
};

const Line = ({ children }) => (
  <span className="reveal-line">
    <motion.span variants={lineChild} className="block">
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-5 sm:px-8 lg:px-14 pt-28 pb-16"
    >
      {/* Aura orbs */}
      <motion.div style={{ y: yOrb1 }} className="aura w-[42vw] h-[42vw] -top-[10vw] -left-[8vw]" aria-hidden>
        <div className="w-full h-full rounded-full" style={{ background: "#00E5FF" }} />
      </motion.div>
      <motion.div style={{ y: yOrb2 }} className="aura w-[38vw] h-[38vw] top-[30vh] -right-[10vw]" aria-hidden>
        <div className="w-full h-full rounded-full" style={{ background: "#9D00FF" }} />
      </motion.div>
      <motion.div style={{ y: yOrb1 }} className="aura w-[26vw] h-[26vw] bottom-[-6vw] left-[30vw] opacity-20" aria-hidden>
        <div className="w-full h-full rounded-full" style={{ background: "#FF5E00" }} />
      </motion.div>

      <motion.div style={{ y: yText, opacity }} className="relative z-10 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="flex -space-x-1.5">
            {TOOTH_COLORS.map((c, i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-full ring-2 ring-sky-bg"
                style={{ background: c }}
              />
            ))}
          </span>
          <span className="text-xs tracking-[0.25em] uppercase text-zinc-400 font-semibold">
            Multi-Speciality Dental Care · Hyderabad
          </span>
        </motion.div>

        <motion.h1
          variants={lineParent}
          initial="hidden"
          animate="show"
          className="font-serif tracking-tight leading-[0.92] text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw]"
        >
          <Line>Where every</Line>
          <Line>
            <span className="italic text-zinc-400">smile</span> finds its
          </Line>
          <Line>
            true <span style={{ color: "#00E5FF" }}>wellness.</span>
          </Line>
        </motion.h1>

        <div className="mt-10 sm:mt-14 grid md:grid-cols-[1fr_auto] gap-8 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="max-w-xl text-lg sm:text-xl leading-relaxed text-zinc-300 font-sans"
          >
            The Sky Dental Wellness Centre brings root canal, implants,
            orthodontics, clear aligners and gentle kids' dentistry together —
            across two Hyderabad units, under one considered roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={`tel:${LOCATIONS[0].phone}`}
              data-testid="hero-call-btn"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-6 pr-5 py-4 text-sm font-semibold hover:bg-tooth-teal transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              Book an appointment
            </a>
            <a
              href="#services"
              data-testid="hero-explore-btn"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 text-white px-6 py-4 text-sm font-semibold hover:bg-white/5 transition-colors duration-300"
            >
              Explore our care
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
