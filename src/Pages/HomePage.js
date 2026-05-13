import React from "react";
import { projectData } from "../Constants";
import { Link } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import RootPiText from "../images/LogoTextTransBlack.png";
import VRDude from "../images/VRDude.webp";
import Coder from "../images/Coder.webp";
import AI from "../images/AI.webp";
import { FiMail, FiPhone, FiMapPin, FiChevronDown } from "react-icons/fi";

function HomePage() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 24,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Header
        subtitle={
          <img className="header-image-container" src={RootPiText} alt="RootPi" />
        }
      />
      <main>
        {/* ── Hero ── */}
        <section className="hero-section w-full min-h-[92vh] flex flex-col items-center justify-center">

          {/* Floating circular images with parallax */}
          <img src={VRDude} alt="VR simulation" className="hero-ball hero-ball-1 hidden md:block"
            style={{ transform: `translate(${mouse.x * 14}px, ${mouse.y * 9}px)` }} />
          <img src={AI} alt="AI development" className="hero-ball hero-ball-2 hidden md:block"
            style={{ transform: `translate(${mouse.x * 9}px, ${mouse.y * 14}px)` }} />
          <img src={Coder} alt="Software development" className="hero-ball hero-ball-3 hidden md:block"
            style={{ transform: `translate(${mouse.x * -12}px, ${mouse.y * -9}px)` }} />

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
            <h1
              className="font-display font-bold tracking-tight leading-none mb-6 text-7xl md:text-[8rem] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
            >
              RootPi
            </h1>
            <p className="text-lg md:text-xl text-ink-muted mb-4 font-normal">
              Fullstack applications &amp; AI solutions
            </p>
            <p className="text-sm md:text-base text-ink-subtle max-w-xs leading-relaxed mb-10" style={{ textWrap: "balance" }}>
              <span className="block">
                We build custom software — web platforms, mobile apps, VR
                simulations and AI tools.
              </span>
              <span className="block mt-3">
                Let's talk about what we can build together.
              </span>
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 rounded-lg bg-white text-surface-page text-sm font-bold hover:bg-zinc-200 transition-colors duration-200 cursor-pointer tracking-wide inline-block w-auto"
            >
              Get in touch
            </button>
          </div>

          <div className="hero-fade" />

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-subtle animate-bounce z-10">
            <FiChevronDown size={22} />
          </div>
        </section>

        {/* ── Featured projects ── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-9 lg:px-11 w-full">
          <div className="flex justify-center mt-4 mb-10">
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="flex flex-col bg-surface rounded-2xl border border-outline p-7"
              >
                {/* Logo + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-20 h-20 shrink-0 rounded-xl bg-surface-alt border border-outline p-2.5 flex items-center justify-center">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-ink leading-snug">
                    {project.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-sm leading-relaxed text-ink-muted flex-1 mb-5">
                  {project.description}
                </p>
                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-outline-faint">
                  {project.link ? (
                    <a
                      href={project.link}
                      className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-200 no-underline"
                    >
                      {project.linkText || "Learn More"} →
                    </a>
                  ) : (
                    <span className="text-sm text-ink-subtle italic">
                      Not publicly available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <Link
              to="/portfolio"
              className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-200 no-underline"
            >
              View all projects →
            </Link>
          </div>
        </div>

        {/* ── Contact ── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-9 lg:px-11 w-full">
          <div className="flex justify-center mb-4">
            <h2 className="section-title">Contact</h2>
          </div>

          <div
            id="contact-section"
            className="relative bg-surface rounded-2xl border border-outline p-8 md:p-10 mx-auto mb-16 w-full md:w-[70%] lg:w-[50%] max-w-[720px] overflow-hidden"
          >
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent rounded-l-2xl" />

            <h3 className="text-2xl font-display font-bold text-ink mb-2">
              Say hello
            </h3>
            <p className="text-ink-muted text-sm md:text-base mb-8 leading-relaxed">
              Tell us about your project, your company, or your ideas — we'd
              love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FiMapPin size={17} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-ink text-sm">
                    RootPi AB
                  </span>
                  <span className="block text-ink-muted text-sm">
                    Bantorget 2, 222 29, Lund
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiMail size={17} className="text-accent shrink-0" />
                <a
                  href="mailto:info@rootpi.xyz"
                  className="text-ink text-sm font-semibold no-underline hover:text-accent transition-colors duration-200"
                >
                  info@rootpi.xyz
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={17} className="text-accent shrink-0" />
                <a
                  href="tel:+46730889556"
                  className="text-ink text-sm font-semibold no-underline hover:text-accent transition-colors duration-200"
                >
                  +4673 088 95 56
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
