// Icons
import { BsBadgeVrFill, BsUnity } from "react-icons/bs";
import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaVuejs,
  FaJava,
} from "react-icons/fa";

import {
  SiCsharp,
  SiBlender,
  SiJavascript,
  SiDart,
  SiPython,
  SiCss3,
  SiFlutter,
  SiLaravel,
  SiTailwindcss,
  SiOpenai,
  SiFirebase,
  SiMeta,
  SiApple,
  SiGoogleplay,
} from "react-icons/si";

// Project images
import TraumaSim from "./images/traumasim_logo.webp";
import MappLogo from "./images/MappLogo.webp";
import KemikollenLogo from "./images/kemikollen_logo.svg";

export const projectData = [
  {
    title: "MAPP",
    icons: [
      { tooltip: "Laravel", icon: <SiLaravel /> },
      { tooltip: "VueJS", icon: <FaVuejs /> },
      { tooltip: "Flutter", icon: <SiFlutter /> },
      { tooltip: "App Store", icon: <SiApple /> },
      { tooltip: "Google Play", icon: <SiGoogleplay /> },
    ],
    description: {
      en: "MAPP is an innovative agricultural company providing advanced solutions mapping, analysis, planning, and precision agriculture.",
      sv: "MAPP är ett innovativt jordbruksföretag som erbjuder avancerade lösningar för kartläggning, analys, planering och precisionsjordbruk.",
    },
    imgSrc: MappLogo,
    link: "https://mapp.se",
    linkText: "mapp.se",
  },
  {
    title: "TraumaSim VR",
    icons: [
      { tooltip: "VR", icon: <BsBadgeVrFill /> },
      { tooltip: "Meta", icon: <SiMeta /> },
      { tooltip: "Unity", icon: <BsUnity /> },
      { tooltip: "Blender", icon: <SiBlender /> },
      { tooltip: "C#", icon: <SiCsharp /> },
    ],
    description: {
      en: "A VR education software for practicing realistic trauma related scenarios in a medical environment. Reach out to us for free access to the software.",
      sv: "En VR-utbildningsmjukvara för att öva realistiska traumarelaterade scenarier i en medicinsk miljö. Hör av dig till oss för kostnadsfri tillgång till mjukvaran.",
    },
    imgSrc: TraumaSim,
    link: "https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g",
    linkText: { en: "YouTube Channel", sv: "YouTube-kanal" },
  },
  {
    title: "Kemikollen",
    icons: [
      { tooltip: "Laravel", icon: <SiLaravel /> },
      { tooltip: "VueJS", icon: <FaVuejs /> },
      { tooltip: "TailwindCSS", icon: <SiTailwindcss /> },
      { tooltip: "OpenAI", icon: <SiOpenai /> },
    ],
    description: {
      en: "A modern REST API delivering structured, up-to-date data on Swedish pesticides and biocides — built for developers and companies that need reliable plant protection information.",
      sv: "Ett modernt REST-API som levererar strukturerad och aktuell data om svenska bekämpningsmedel och biocider — byggt för utvecklare och företag som behöver tillförlitlig information om växtskydd.",
    },
    imgSrc: KemikollenLogo,
    link: "https://kemikollen.se",
    linkText: "kemikollen.se",
  },
];

export const techStackIcons = [
  { tooltip: "C#", icon: <SiCsharp /> },
  { tooltip: "Python", icon: <SiPython /> },
  { tooltip: "Java", icon: <FaJava /> },
  { tooltip: "PHP", icon: <FaPhp /> },
  { tooltip: "Html5", icon: <FaHtml5 /> },
  { tooltip: "JavaScript", icon: <SiJavascript /> },
  { tooltip: "Dart", icon: <SiDart /> },
  { tooltip: "Css3", icon: <SiCss3 /> },
];

export const frameworksIcons = [
  { tooltip: "Unity", icon: <BsUnity /> },
  { tooltip: "Blender", icon: <SiBlender /> },
  { tooltip: "Meta", icon: <SiMeta /> },
  { tooltip: "Flutter", icon: <SiFlutter /> },
  { tooltip: "Laravel", icon: <SiLaravel /> },
  { tooltip: "React", icon: <FaReact /> },
  { tooltip: "VueJS", icon: <FaVuejs /> },
  { tooltip: "TailwindCSS", icon: <SiTailwindcss /> },
  { tooltip: "OpenAI", icon: <SiOpenai /> },
  { tooltip: "Firebase", icon: <SiFirebase /> },
];
