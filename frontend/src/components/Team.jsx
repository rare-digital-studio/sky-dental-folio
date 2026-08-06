import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { DOCTORS } from "@/data";

const ease = [0.76, 0, 0.24, 1];

const DoctorCard = ({ doc, index, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(doc)}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease, delay: index * 0.1 }}
    data-testid={`doctor-card-${doc.id}`}
    className="group text-left"
  >
    <div className="hover-grayscale relative overflow-hidden rounded-2xl bg-sky-surface aspect-[3/4]">
      <img
        src={doc.image}
        alt={doc.name}
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      <div
        className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Plus className="h-3.5 w-3.5" style={{ color: doc.accent }} />
        <span className="text-xs text-white">Read bio</span>
      </div>
      <span
        className="absolute top-4 left-4 h-2.5 w-2.5 rounded-full"
        style={{ background: doc.accent }}
      />
    </div>
    <div className="mt-5">
      <h3 className="font-serif text-2xl sm:text-[1.7rem] leading-tight">
        {doc.name}
      </h3>
      <p className="mt-1 text-sm" style={{ color: doc.accent }}>
        {doc.role}
      </p>
      <p className="mt-0.5 text-xs text-zinc-500">{doc.degrees}</p>
    </div>
  </motion.button>
);

export const Team = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="team"
      data-testid="team-section"
      className="relative px-5 sm:px-8 lg:px-14 py-24 sm:py-32 bg-sky-surface"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs tracking-[0.25em] uppercase text-zinc-500 font-semibold">
            The specialists
          </span>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
            Meet the hands
            <br />
            <span className="italic text-zinc-400">behind the smiles.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DOCTORS.map((doc, i) => (
            <DoctorCard key={doc.id} doc={doc} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
            data-testid="doctor-modal"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.5, ease }}
              className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-sky-elevated border border-white/10 p-6 sm:p-10"
            >
              <button
                onClick={() => setActive(null)}
                data-testid="doctor-modal-close"
                className="absolute top-5 right-5 rounded-full bg-white/5 hover:bg-white/10 p-2.5 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="grid sm:grid-cols-[180px_1fr] gap-6 sm:gap-8">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[240px] w-full">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full mb-4"
                    style={{ background: active.accent }}
                  />
                  <h3 className="font-serif text-3xl sm:text-4xl leading-tight">
                    {active.name}
                  </h3>
                  <p className="mt-2 font-semibold" style={{ color: active.accent }}>
                    {active.role}
                  </p>
                  <p className="text-sm text-zinc-500">{active.degrees}</p>
                </div>
              </div>
              <div className="mt-8 space-y-4 text-zinc-300 leading-relaxed">
                {active.bio.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
