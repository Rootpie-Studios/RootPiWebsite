import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { pick, useLanguage, useT } from "../i18n/LanguageContext";
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

const VISIT = { en: "Visit Website", sv: "Besök webbplats" };
const YOUTUBE = { en: "YouTube Channel", sv: "YouTube-kanal" };

const projects = [
  {
    title: "MAPP",
    description: {
      en: "MAPP is an innovative agricultural platform that revolutionizes modern farming through advanced mapping and analysis solutions. Working with AgroMapp Sverige AB, we develop tools to enable precision agriculture and smarter farm planning to improve productivity and sustainability.",
      sv: "MAPP är en innovativ jordbruksplattform som revolutionerar modernt lantbruk genom avancerade lösningar för kartläggning och analys. Tillsammans med AgroMapp Sverige AB utvecklar vi verktyg som möjliggör precisionsjordbruk och smartare gårdsplanering för att förbättra produktivitet och hållbarhet.",
    },
    link: "https://mapp.se",
    linkText: VISIT,
    image: MappLogo,
    alt: "Mapp Logo",
  },
  {
    title: "Kemikollen",
    description: {
      en: "Kemikollen is a modern API for Swedish pesticide and biocide data. We collect, structure, and serve up-to-date information on every approved plant protection product in Sweden — combining automated monitoring of Kemikalieinspektionen with AI-driven extraction from decision PDFs to give developers and companies a reliable, machine-readable source.",
      sv: "Kemikollen är ett modernt API för svensk data om bekämpningsmedel och biocider. Vi samlar in, strukturerar och tillhandahåller aktuell information om varje godkänt växtskyddsmedel i Sverige — genom att kombinera automatisk bevakning av Kemikalieinspektionen med AI-driven extraktion ur beslutshandlingar i PDF-format ger vi utvecklare och företag en tillförlitlig, maskinläsbar källa.",
    },
    link: "https://kemikollen.se",
    linkText: VISIT,
    image: KemikollenLogo,
    alt: "Kemikollen Logo",
    imageClassName: "object-contain p-2.5",
  },
  {
    title: "Invenire",
    description: {
      en: "A platform for visual artists to discover open calls for residencies and exhibitions. Follow the galleries and institutions you care about — and let Invenire track opportunities for you.",
      sv: "En plattform för konstnärer att upptäcka öppna ansökningar till residens och utställningar. Följ de gallerier och institutioner du bryr dig om — och låt Invenire bevaka möjligheterna åt dig.",
    },
    link: "https://invenire.se",
    linkText: VISIT,
    image: InvenireLogo,
    alt: "Invenire Logo",
  },
  {
    title: "pluggahp.com",
    description: {
      en: "Pluggahp is a comprehensive platform designed to help students prepare for the Swedish Högskoleprovet (SweSAT). With practice tests, study materials, and progress tracking, we make it easier for students to achieve their academic goals and secure their place at Swedish universities.",
      sv: "Pluggahp är en heltäckande plattform som hjälper studenter att förbereda sig inför Högskoleprovet. Med övningsprov, studiematerial och framstegsuppföljning gör vi det enklare för studenter att nå sina akademiska mål och säkra sin plats på svenska universitet.",
    },
    link: "https://pluggahp.com",
    linkText: VISIT,
    image: PluggahpLogo,
    alt: "Pluggahp Logo",
    imageClassName: "object-contain p-2.5",
  },
  {
    title: "TraumaSim VR",
    description: {
      en: "A virtual reality medical training simulation created in collaboration with Umeå University. This immersive educational platform helps hospital personnel and students practice critical trauma care procedures in a risk-free environment, enhancing readiness for real-world emergencies.",
      sv: "En medicinsk träningssimulering i virtuell verklighet, skapad i samarbete med Umeå universitet. Denna uppslukande utbildningsplattform hjälper sjukhuspersonal och studenter att öva kritiska traumavårdsprocedurer i en riskfri miljö, vilket ökar beredskapen inför verkliga nödsituationer.",
    },
    link: "https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g",
    linkText: YOUTUBE,
    image: TraumaSim,
    alt: "TraumaSim Logo",
  },
  {
    title: { en: "Consulting for Niftitech", sv: "Konsultuppdrag för Niftitech" },
    description: {
      en: "Our team provides comprehensive development services to Niftitech, helping them deliver exceptional mobile applications and web solutions. We work closely with their team to transform client requirements into polished, user-focused products that exceed expectations.",
      sv: "Vårt team tillhandahåller heltäckande utvecklingstjänster till Niftitech och hjälper dem att leverera förstklassiga mobilappar och webblösningar. Vi arbetar nära deras team för att omvandla kundernas krav till genomarbetade, användarfokuserade produkter som överträffar förväntningarna.",
    },
    link: "https://niftitech.com/",
    linkText: VISIT,
    image: Nifti,
    alt: "Nifti Logo",
  },
  {
    title: "sagostund.nu",
    description: {
      en: "Sagostund transforms simple text prompts into magical, narrated stories. With just a few words, our platform creates completely unique tales complete with custom illustrations and professional-quality narration. Perfect for parents, teachers, or anyone who loves stories.",
      sv: "Sagostund förvandlar enkla textmeddelanden till magiska, berättade sagor. Med bara några få ord skapar vår plattform helt unika berättelser kompletta med egna illustrationer och berättarröst av professionell kvalitet. Perfekt för föräldrar, lärare eller alla som älskar sagor.",
    },
    link: "https://sagostund.nu/skapa-din-egen-saga",
    linkText: { en: "Create a Story", sv: "Skapa en saga" },
    image: SagoLogo,
    alt: "Sagostund Logo",
  },
  {
    title: "snickeristark.se",
    description: {
      en: "Website for Snickeri Stark, a Swedish bespoke carpentry studio specialising in custom stairs, interior cabinetry, shelving, and wardrobes. Built to showcase their craftsmanship and convert visitors into enquiries.",
      sv: "Webbplats för Snickeri Stark, en svensk specialsnickeristudio inriktad på måttbeställda trappor, inredningssnickerier, hyllor och garderober. Byggd för att visa upp deras hantverk och omvandla besökare till förfrågningar.",
    },
    link: "https://snickeristark.se",
    linkText: VISIT,
    image: SnickeristarkLogo,
    alt: "Snickeri Stark Logo",
    imageClassName: "object-contain p-2.5",
  },
  {
    title: "ai-decoder.com",
    description: {
      en: "AI-decoder revolutionizes traditional biobanking with a streamlined digital approach. Researchers can upload images of 96-well plates, and our system automatically decodes and catalogs samples, seamlessly integrating with digital storage systems.",
      sv: "AI-decoder revolutionerar traditionell biobankning med ett strömlinjeformat digitalt arbetssätt. Forskare kan ladda upp bilder av 96-brunnsplattor, och vårt system avkodar och katalogiserar automatiskt prover och integreras sömlöst med digitala lagringssystem.",
    },
    link: "https://ai-decoder.com",
    linkText: VISIT,
    image: DecoderOwl,
    alt: "AI Decoder Logo",
  },
  {
    title: "RootPi Ropes",
    description: {
      en: "RootPi Ropes is our premium toolkit for creating realistic rope and tube simulations in 3D environments. Game developers and 3D artists use our physics-based solution to easily add dynamic, believable rope mechanics to their projects.",
      sv: "RootPi Ropes är vårt förstklassiga verktygspaket för att skapa realistiska rep- och slangsimuleringar i 3D-miljöer. Spelutvecklare och 3D-artister använder vår fysikbaserade lösning för att enkelt lägga till dynamisk, trovärdig repmekanik i sina projekt.",
    },
    link: "https://assetstore.unity.com/packages/tools/physics/rootpi-ropes-248288",
    linkText: "Unity Asset Store",
    image: Ropes,
    alt: "RootPi Ropes Logo",
  },
  {
    title: "KawAI",
    description: {
      en: "KawAI is our educational YouTube channel showcasing the journey of artificial intelligence learning in interactive 3D environments. Watch as a cute AI progressively masters complex tasks through trial and error.",
      sv: "KawAI är vår pedagogiska YouTube-kanal som visar resan i artificiell intelligens-inlärning i interaktiva 3D-miljöer. Se hur en söt AI gradvis bemästrar komplexa uppgifter genom att pröva sig fram.",
    },
    link: "https://www.youtube.com/@KawAI-ys2my",
    linkText: YOUTUBE,
    image: KawAI,
    alt: "KawAI Logo",
  },
  {
    title: "TimeTracker",
    description: {
      en: "TimeTracker seamlessly logs your activities using your phone's location data, eliminating the need for manual check-ins. The app quietly works in the background, providing insights into how you spend your time at different locations.",
      sv: "TimeTracker loggar sömlöst dina aktiviteter med hjälp av telefonens platsdata och eliminerar behovet av manuella incheckningar. Appen arbetar tyst i bakgrunden och ger insikter i hur du spenderar din tid på olika platser.",
    },
    link: null,
    image: TimeTrack,
    alt: "TimeTracker Logo",
  },
  {
    title: "LundaPant",
    description: {
      en: "LundaPant makes recycling bottles and cans effortless for residents of Lund. Our app shows the nearest recycling stations, tracks your environmental impact, and helps manage your returns.",
      sv: "LundaPant gör det enkelt för Lundabor att panta flaskor och burkar. Vår app visar närmaste pantstationer, följer din miljöpåverkan och hjälper dig att hantera dina returer.",
    },
    link: "https://play.google.com/store/apps/details?id=com.rootpi.lunda_pant&hl=ln",
    linkText: "Google Play Store",
    image: LundaPant,
    alt: "LundaPant Logo",
  },
  {
    title: { en: "GvHD Detection System", sv: "GvHD-detektionssystem" },
    description: {
      en: "Developed in partnership with Lund University researchers, this medical diagnostic tool helps identify Graft versus Host Disease (GvHD) from patient samples. Our solution analyzes microRNA patterns to provide fast, accurate disease detection.",
      sv: "Utvecklat i samarbete med forskare vid Lunds universitet hjälper detta medicinska diagnostikverktyg till att identifiera transplantat-mot-värd-sjukdom (GvHD) från patientprover. Vår lösning analyserar mikroRNA-mönster för att ge snabb och träffsäker sjukdomsdetektion.",
    },
    link: null,
    image: GvHD,
    alt: "GvHD Project",
  },
  {
    title: "Halite IV",
    description: {
      en: "A master thesis project that created intelligent digital agents capable of competing in the Halite IV strategy competition. Our autonomous agents learned to make complex decisions about resource management and tactical gameplay.",
      sv: "Ett examensarbete som skapade intelligenta digitala agenter som kan tävla i strategitävlingen Halite IV. Våra autonoma agenter lärde sig att fatta komplexa beslut om resurshantering och taktiskt spelande.",
    },
    link: "https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9059757&fileOId=9059759",
    linkText: { en: "Read Thesis", sv: "Läs uppsats" },
    image: HaliteIV,
    alt: "Halite IV Logo",
  },
  {
    title: "Crystal Quest 2",
    description: {
      en: "Crystal Quest 2 is our captivating mobile adventure game available on iOS and Android. Players collect crystals while solving puzzles and overcoming obstacles in beautifully designed worlds.",
      sv: "Crystal Quest 2 är vårt fängslande mobila äventyrsspel för iOS och Android. Spelare samlar kristaller medan de löser pussel och övervinner hinder i vackert designade världar.",
    },
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
  const { lang } = useLanguage();
  const t = useT();
  const resolvedTitle = pick(title, lang);

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
              {resolvedTitle.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <h2 className="text-base font-bold text-ink leading-snug">
          {resolvedTitle}
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-ink-muted flex-1 mb-5">
        {pick(description, lang)}
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
            {pick(linkText, lang) || t("common.learnMore")} →
          </a>
        ) : (
          <span className="text-sm text-ink-subtle italic">
            {t("common.notPublic")}
          </span>
        )}
      </div>
    </div>
  );
}

function PortfolioPage() {
  const t = useT();
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <div className="flex justify-center">
          <h1 className="section-title">{t("portfolio.title")}</h1>
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
