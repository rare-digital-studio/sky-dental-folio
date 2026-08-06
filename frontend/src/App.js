import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ribbon } from "@/components/Ribbon";
import { Ethos } from "@/components/Ethos";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -60 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <div className="grain-overlay" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <Ethos />
        <Services />
        <Team />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
