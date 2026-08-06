import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOCATIONS } from "@/data";

const links = [
  { label: "Care", href: "#services" },
  { label: "Doctors", href: "#team" },
  { label: "Ethos", href: "#ethos" },
  { label: "Visit", href: "#locations" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-14 transition-[padding,background-color,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "py-3 bg-black/60 backdrop-blur-2xl border-b border-white/5"
            : "py-5 sm:py-7 bg-transparent border-b border-transparent"
        }`}
      >
        <a
          href="#top"
          data-testid="navbar-logo"
          className="flex items-center gap-3 group"
        >
          <img
            src="/assets/logo.jpeg"
            alt="Sky Dental Wellness Centre"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="link-underline text-sm tracking-wide text-zinc-300 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${LOCATIONS[0].phone}`}
            data-testid="navbar-call-btn"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-tooth-teal transition-colors duration-300"
          >
            Call the clinic
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`h-px w-6 bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="font-serif text-3xl text-zinc-200"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${LOCATIONS[0].phone}`}
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold"
              >
                Call the clinic
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
