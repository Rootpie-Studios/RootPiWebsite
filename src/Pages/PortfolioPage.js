import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardProject from "../Components/CardProject";
import CircularImage from "../Components/CircularImage";
import logo from "../images/LogoTextTransBlack.png";

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

const projectCardClasses =
  "m-0 flex flex-col relative p-9 pb-24 rounded-2xl shadow-lg bg-white border border-gray-200";
const projectContentClasses = "flex-1 flex flex-col";
const projectTitleClasses = "text-2xl md:text-3xl mb-3 text-gray-700";
const projectTextClasses = "text-base leading-relaxed text-gray-600 mb-8";
const projectButtonClasses =
  "inline-block px-7 py-4 bg-gray-700 text-white rounded-lg no-underline font-medium absolute bottom-9 left-9 transition-all duration-200 hover:bg-gray-600 hover:-translate-y-0.5";
const projectImageWrapperClasses =
  "w-full flex justify-center items-center mb-2.5 p-0";

function PortfolioPage() {
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
        "Sagostund transforms simple text prompts into magical, narrated stories. With just a few words, our platform creates completely unique tales complete with custom illustrations and professional-quality narration. Perfect for parents, teachers, or anyone who loves stories but lacks time to create them from scratch.",
      link: "https://sagostund.nu/skapa-din-egen-saga",
      linkText: "Create a Story",
      image: SagoLogo,
      alt: "Sagostund Logo",
    },
    {
      title: "ai-decoder.com",
      description:
        "AI-decoder revolutionizes traditional biobanking with a streamlined digital approach. Researchers can upload images of 96-well plates, and our system automatically decodes and catalogs samples, seamlessly integrating with digital storage systems. This innovation drastically reduces manual work while improving accuracy in biospecimen management.",
      link: "https://ai-decoder.com",
      linkText: "Visit Website",
      image: DecoderOwl,
      alt: "AI Decoder Logo",
    },
    {
      title: "RootPi Ropes",
      description:
        "RootPi Ropes is our premium toolkit for creating realistic rope and tube simulations in 3D environments. Game developers and 3D artists use our physics-based solution to easily add dynamic, believable rope mechanics to their projects, saving countless hours of complex programming while enhancing visual appeal.",
      link: "https://assetstore.unity.com/packages/tools/physics/rootpi-ropes-248288",
      linkText: "Unity Asset Store",
      image: Ropes,
      alt: "RootPi Ropes Logo",
    },
    {
      title: "KawAI",
      description:
        "KawAI is our educational YouTube channel showcasing the journey of artificial intelligence learning in interactive 3D environments. Watch as the cute AI progressively masters complex tasks through trial and error, providing both entertainment and insights into how machine learning evolves over time.",
      link: "https://www.youtube.com/@KawAI-ys2my",
      linkText: "YouTube Channel",
      image: KawAI,
      alt: "KawAI Logo",
    },
    {
      title: "TimeTracker",
      description:
        "TimeTracker seamlessly logs your activities using your phone's location data, eliminating the need for manual check-ins. The app quietly works in the background, providing insights into how you spend your time at different locations. Perfect for professionals tracking billable hours or anyone wanting to optimize their daily routine.",
      link: null,
      image: TimeTrack,
      alt: "TimeTracker Logo",
    },
    {
      title: "LundaPant",
      description:
        "LundaPant makes recycling bottles and cans effortless for residents of Lund. Our app shows the nearest recycling stations, tracks your environmental impact, and helps manage your returns. This practical tool encourages sustainability while making the recycling process more convenient and rewarding.",
      link: "https://play.google.com/store/apps/details?id=com.rootpi.lunda_pant&hl=ln",
      linkText: "Google Play Store",
      image: LundaPant,
      alt: "LundaPant Logo",
    },
    {
      title: "GvHD Detection System",
      description:
        "Developed in partnership with Lund University researchers, this medical diagnostic tool helps identify Graft versus Host Disease (GvHD) from patient samples. Our solution analyzes microRNA patterns to provide fast, accurate disease detection, potentially improving treatment timing and patient outcomes for this serious transplant complication.",
      link: null,
      image: GvHD,
      alt: "GvHD Project",
    },
    {
      title: "Halite IV",
      description:
        "A master thesis project that created intelligent digital agents capable of competing in the Halite IV strategy competition. Our autonomous agents learned to make complex decisions about resource management and tactical gameplay, demonstrating how AI can master intricate competitive environments through strategic learning.",
      link: "https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9059757&fileOId=9059759",
      linkText: "Read Thesis",
      image: HaliteIV,
      alt: "Halite IV Logo",
    },
    {
      title: "Crystal Quest 2",
      description:
        "Crystal Quest 2 is our captivating mobile adventure game available on iOS and Android. Players embark on a journey to collect precious crystals while solving puzzles and overcoming obstacles in beautifully designed worlds. With intuitive controls, progressive difficulty, and rewarding gameplay, it offers a delightful experience for casual gamers of all ages.",
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

  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <div className="flex justify-center">
          <h1 className="section-title">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-11 px-6 md:px-9 lg:px-11 max-w-[1400px] mx-auto my-8 mb-16 w-full">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              textColor="black"
              width="100%"
              className={projectCardClasses}
              images={
                <div className={projectImageWrapperClasses}>
                  <CircularImage
                    className="w-40 h-40"
                    src={project.image}
                    alt={project.alt}
                  />
                </div>
              }
              children={
                <div className={projectContentClasses}>
                  <h2 className={projectTitleClasses}>{project.title}</h2>
                  <p className={projectTextClasses}>{project.description}</p>
                  {project.links ? (
                    <div className="flex gap-3 absolute bottom-9 left-9">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="inline-block px-5 py-3 bg-gray-700 text-white rounded-lg no-underline font-medium transition-all duration-200 hover:bg-gray-600 hover:-translate-y-0.5"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ) : project.link ? (
                    <a href={project.link} className={projectButtonClasses}>
                      {project.linkText || "Learn More"}
                    </a>
                  ) : null}
                </div>
              }
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage;
