// Icons
import { BsBadgeVrFill, BsUnity } from "react-icons/bs";
import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaVuejs,
  FaJava,
  FaPython,
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
import sago_logo from "./images/sago_logo.png";
// import ai_decoder from "./images/decoder_owl.png";
import MappLogo from "./images/MappLogo.png";

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
    description:
      "MAPP is an innovative agricultural company providing advanced solutions mapping, analysis, planning, and precision agriculture.",
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
    description:
      "A VR education software for practicing realistic trauma related scenarios in a medical environment. Reach out to us for free access to the software.",
    imgSrc: TraumaSim,
    link: "https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g",
    linkText: "Youtube Channel",
  },
  {
    title: "sagostund.nu",
    icons: [
      { tooltip: "Python", icon: <FaPython /> },
      { tooltip: "VueJS", icon: <FaVuejs /> },
      { tooltip: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
    description:
      "A website for creating magical stories and fairy tales for your children, your friends or yourself!",
    imgSrc: sago_logo,
    link: "https://sagostund.nu",
    linkText: "sagostund.nu",
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
