import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";

import InvenireLogo from "../images/invenire_logo.png";
import SnickeristarkLogo from "../images/snickeristark_logo.png";
import TraumaSim from "../images/traumasim_logo.webp";
import HaliteIV from "../images/HaliteIV.png";
import CrystalQuest2 from "../images/CrystalQuest2.png";
import Nifti from "../images/Nifti.png";
import LundaPant from "../images/LundaPant.png";
import Ropes from "../images/RootPiRopesAssetIconHQ.png";
import SagoLogo from "../images/sago_logo.webp";
import TimeTrack from "../images/TimeTrackBadLogo.png";
import GvHD from "../images/GvHD.jpg";
import DecoderOwl from "../images/decoder_owl.png";
import KawAI from "../images/KawAI.png";
import MappLogo from "../images/MappLogo.webp";
import PluggahpLogo from "../images/pluggahp_logo.png";
import KemikollenLogo from "../images/kemikollen_logo.svg";

const projects = [
  {
    title: "MAPP",
    description:
      "MAPP is an innovative agricultural platform that revolutionizes modern farming through advanced mapping and analysis solutions. Working with AgroMapp Sverige AB, we develop tools to enable precision agriculture and smarter farm planning to improve productivity and sustainability.",
    link: "https://mapp.se",
    linkText: "Visit Website",
    image: MappLogo,
    alt: "Mapp Logo",
  },
  {
    title: "Kemikollen",
    description:
      "Kemikollen is a modern API for Swedish pesticide and biocide data. We collect, structure, and serve up-to-date information on every approved plant protection product in Sweden — combining automated monitoring of Kemikalieinspektionen with AI-driven extraction from decision PDFs to give developers and companies a reliable, machine-readable source.",
    link: "https://kemikollen.se",
    linkText: "Visit Website",
    image: KemikollenLogo,
    alt: "Kemikollen Logo",
    imageClassName: "object-contain p-2.5",
  },
  {
    title: "Invenire",
    description:
      "A platform for visual artists to discover open calls for residencies and exhibitions. Follow the galleries and institutions you care about — and let Invenire track opportunities for you.",
    link: "https://invenire.se",
    linkText: "Visit Website",
    image: InvenireLogo,
    alt: "Invenire Logo",
  },
  {
    title: "pluggahp.com",
    description:
      "Pluggahp is a comprehensive platform designed to help students prepare for the Swedish Högskoleprovet (SweSAT). With practice tests, study materials, and progress tracking, we make it easier for students to achieve their academic goals and secure their place at Swedish universities.",
    link: "https://pluggahp.com",
    linkText: "Visit Website",
    image: PluggahpLogo,
    alt: "Pluggahp Logo",
    imageClassName: "object-contain p-2.5",
  },
  {
    title: "TraumaSim VR",
    description:
      "A virtual reality medical training simulation created in collaboration with Umeå University. This immersive educational platform helps hospital personnel and students practice critical trauma care procedures in a risk-free environment, enhancing readiness for real-world emergencies.",
    link: "https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g",
    linkText: "YouTube Channel",
    image: TraumaSim,
    alt: "TraumaSim Logo",
  },
  {
    title: "Consulting for Niftitech",
    description:
      "Our team provides comprehensive development services to Niftitech, helping them deliver exceptional mobile applications and web solutions. We work closely with their team to transform client requirements into polished, user-focused products that exceed expectations.",
    link: "https://niftitech.com/",
    linkText: "Visit Website",
    image: Nifti,
    alt: "Nifti Logo",
  },
  {
    title: "sagostund.nu",
    description:
      "Sagostund transforms simple text prompts into magical, narrated stories. With just a few words, our platform creates completely unique tales complete with custom illustrations and professional-quality narration. Perfect for parents, teachers, or anyone who loves stories.",
    link: "https://sagostund.nu/skapa-din-egen-saga",
    linkText: "Create a Story",
    image: SagoLogo,
    alt: "Sagostund Logo",
  },
  {
    title: "snickeristark.se",
    description:
      "Website for Snickeri Stark, a Swedish bespoke carpentry studio specialising in custom stairs, interior cabinetry, shelving, and wardrobes. Built to showcase their craftsmanship and convert visitors into enquiries.",
    link: "https://snickeristark.se",
    linkText: "Visit Website",
    image: SnickeristarkLogo,
    alt: "Snickeri Stark Logo",
    imageClassName: "object-contain p-2.5",
  },
  {
    title: "ai-decoder.com",
    description:
      "AI-decoder revolutionizes traditional biobanking with a streamlined digital approach. Researchers can upload images of 96-well plates, and our system automatically decodes and catalogs samples, seamlessly integrating with digital storage systems.",
    link: "https://ai-decoder.com",
    linkText: "Visit Website",
    image: DecoderOwl,
    alt: "AI Decoder Logo",
  },
  {
    title: "RootPi Ropes",
    description:
      "RootPi Ropes is our premium toolkit for creating realistic rope and tube simulations in 3D environments. Game developers and 3D artists use our physics-based solution to easily add dynamic, believable rope mechanics to their projects.",
    link: "https://assetstore.unity.com/packages/tools/physics/rootpi-ropes-248288",
    linkText: "Unity Asset Store",
    image: Ropes,
    alt: "RootPi Ropes Logo",
  },
  {
    title: "KawAI",
    description:
      "KawAI is our educational YouTube channel showcasing the journey of artificial intelligence learning in interactive 3D environments. Watch as a cute AI progressively masters complex tasks through trial and error.",
    link: "https://www.youtube.com/@KawAI-ys2my",
    linkText: "YouTube Channel",
    image: KawAI,
    alt: "KawAI Logo",
  },
  {
    title: "TimeTracker",
    description:
      "TimeTracker seamlessly logs your activities using your phone's location data, eliminating the need for manual check-ins. The app quietly works in the background, providing insights into how you spend your time at different locations.",
    link: null,
    image: TimeTrack,
    alt: "TimeTracker Logo",
  },
  {
    title: "LundaPant",
    description:
      "LundaPant makes recycling bottles and cans effortless for residents of Lund. Our app shows the nearest recycling stations, tracks your environmental impact, and helps manage your returns.",
    link: "https://play.google.com/store/apps/details?id=com.rootpi.lunda_pant&hl=ln",
    linkText: "Google Play Store",
    image: LundaPant,
    alt: "LundaPant Logo",
  },
  {
    title: "GvHD Detection System",
    description:
      "Developed in partnership with Lund University researchers, this medical diagnostic tool helps identify Graft versus Host Disease (GvHD) from patient samples. Our solution analyzes microRNA patterns to provide fast, accurate disease detection.",
    link: null,
    image: GvHD,
    alt: "GvHD Project",
  },
  {
    title: "Halite IV",
    description:
      "A master thesis project that created intelligent digital agents capable of competing in the Halite IV strategy competition. Our autonomous agents learned to make complex decisions about resource management and tactical gameplay.",
    link: "https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9059757&fileOId=9059759",
    linkText: "Read Thesis",
    image: HaliteIV,
    alt: "Halite IV Logo",
  },
  {
    title: "Crystal Quest 2",
    description:
      "Crystal Quest 2 is our captivating mobile adventure game available on iOS and Android. Players collect crystals while solving puzzles and overcoming obstacles in beautifully designed worlds.",
    links: [
      {
        href: "https://apps.apple.com/us/app/crystal-quest-2/id1672041266",
        text: "App Store",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.rootpi.crystalquest2&hl=sv",
        text: "Google Play",
      },
    ],
    image: CrystalQuest2,
    alt: "Crystal Quest 2 Logo",
  },
];

function ProjectCard({
  title,
  description,
  image,
  alt,
  link,
  linkText,
  links,
  imageClassName,
}) {
  return (
    <div className="flex flex-col bg-surface rounded-2xl border border-outline p-7">
      {/* Logo + Title */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-20 h-20 shrink-0 rounded-xl bg-surface-alt border border-outline overflow-hidden flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={alt}
              className={`w-full h-full ${imageClassName || "object-cover"}`}
            />
          ) : (
            <span className="text-2xl font-bold text-ink-subtle font-display">
              {title.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <h2 className="text-base font-bold text-ink leading-snug">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-ink-muted flex-1 mb-5">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-auto pt-4 border-t border-outline-faint">
        {links ? (
          <div className="flex gap-5">
            {links.map((l, idx) => (
              <a
                key={idx}
                href={l.href}
                className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-200 no-underline"
              >
                {l.text} →
              </a>
            ))}
          </div>
        ) : link ? (
          <a
            href={link}
            className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-200 no-underline"
          >
            {linkText || "Learn More"} →
          </a>
        ) : (
          <span className="text-sm text-ink-subtle italic">
            Not publicly available
          </span>
        )}
      </div>
    </div>
  );
}

function PortfolioPage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <div className="flex justify-center">
          <h1 className="section-title">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-9 lg:px-11 max-w-[1400px] mx-auto mt-8 mb-16 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage;
