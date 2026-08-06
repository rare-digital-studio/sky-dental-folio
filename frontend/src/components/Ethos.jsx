import { motion } from "framer-motion";
import { MANIFESTO } from "@/data";

const ease = [0.76, 0, 0.24, 1];

export const Ethos = () => {
  return (
    <section
      id="ethos"
      data-testid="ethos-section"
      className="relative px-5 sm:px-8 lg:px-14 py-28 sm:py-40"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-20 sm:mb-28"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-semibold">
            Our ethos
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Dentistry practised as a{" "}
            <span className="italic text-zinc-400">discipline</span>, delivered
            as{" "}
            <span style={{ color: "#00E5FF" }}>care.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-16 border-t border-white/10 pt-14">
          {MANIFESTO.map((m, i) => (
            <motion.div
              key={m.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.12 }}
              data-testid={`ethos-chapter-${m.no}`}
              className="group"
            >
              <div className="font-serif text-7xl sm:text-8xl text-zinc-700 group-hover:text-zinc-500 transition-colors duration-500 leading-none">
                {m.no}
              </div>
              <h3 className="mt-6 font-serif text-3xl sm:text-4xl">{m.title}</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed max-w-sm">
                {m.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
