import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardProject from "../Components/CardProject";
import logo from "../images/LogoTextTransBlack.png";
import "../css/portfolioGrid.css"; // Import new CSS for grid layout

// Images
import TraumaSim from "../images/traumasim_logo.webp";
import Instapply from "../images/Instapply.png";
import HaliteIV from "../images/HaliteIV.png";
import CrystalQuest2 from "../images/CrystalQuest2.png";
import Nifti from "../images/Nifti.png";
import LundaPant from "../images/LundaPant.png";
import Ropes from "../images/RootPiRopesAssetIconHQ.png";
import SagoLogo from "../images/sago_logo.png";
import TimeTrack from "../images/TimeTrackBadLogo.png";
import GvHD from "../images/GvHD.jpg";
import DecoderOwl from "../images/decoder_owl.png";
import KawAI from "../images/KawAI.png";
import MappLogo from "../images/MappLogo.png";

function PortfolioPage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 className="section-title">Projects</h1>
        </div>

        <div className="projects-grid-container">
          {/* Mapp */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">MAPP</h2>
                <p className="text">
                  MAPP is an innovative agricultural platform that
                  revolutionizes modern farming through advanced mapping and
                  analysis solutions. Working with AgroMapp Sverige AB, we
                  developed tools that enable precision agriculture and smarter
                  farm planning for improved productivity and sustainability.
                </p>
                <a href="https://mapp.se" className="card-button">
                  Visit Website
                </a>
              </div>
            }
            images={
              <img className="rounded-image" src={MappLogo} alt="Mapp Logo" />
            }
          />

          {/* TraumaSim VR*/}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">TraumaSim VR</h2>
                <p className="text">
                  A virtual reality medical training simulation created in
                  collaboration with Umeå University. This immersive educational
                  platform helps hospital personnel and students practice
                  critical trauma care procedures in a risk-free environment,
                  enhancing readiness for real-world emergencies.
                </p>
                <a
                  href="https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g"
                  className="card-button"
                >
                  YouTube Channel
                </a>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={TraumaSim}
                alt="TraumaSim Logo"
              />
            }
          />

          {/* Niftitech */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">Consulting for Niftitech</h2>
                <p className="text">
                  Our team provides comprehensive development services to
                  Niftitech, helping them deliver exceptional mobile
                  applications and web solutions. We work closely with their
                  team to transform client requirements into polished,
                  user-focused products that exceed expectations.
                </p>
                <a href="https://niftitech.com/" className="card-button">
                  Visit Website
                </a>
              </div>
            }
            images={
              <img className="rounded-image" src={Nifti} alt="Nifti Logo" />
            }
          />

          {/* sagostund.nu */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">sagostund.nu</h2>
                <p className="text">
                  Sagostund transforms simple text prompts into magical,
                  narrated stories. With just a few words, our platform creates
                  completely unique tales complete with custom illustrations and
                  professional-quality narration. Perfect for parents, teachers,
                  or anyone who loves stories but lacks time to create them from
                  scratch.
                </p>
                <a
                  href="https://sagostund.nu/skapa-din-egen-saga"
                  className="card-button"
                >
                  Create a Story
                </a>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={SagoLogo}
                alt="Sagostund Logo"
              />
            }
          />

          {/* ai-decoder */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">ai-decoder.com</h2>
                <p className="text">
                  AI-decoder revolutionizes traditional biobanking with a
                  streamlined digital approach. Researchers can upload images of
                  96-well plates, and our system automatically decodes and
                  catalogs samples, seamlessly integrating with digital storage
                  systems. This innovation drastically reduces manual work while
                  improving accuracy in biospecimen management.
                </p>
                <a href="https://ai-decoder.com" className="card-button">
                  Visit Website
                </a>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={DecoderOwl}
                alt="AI Decoder Logo"
              />
            }
          />

          {/* Ropes */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">RootPi Ropes</h2>
                <p className="text">
                  RootPi Ropes is our premium toolkit for creating realistic
                  rope and tube simulations in 3D environments. Game developers
                  and 3D artists use our physics-based solution to easily add
                  dynamic, believable rope mechanics to their projects, saving
                  countless hours of complex programming while enhancing visual
                  appeal.
                </p>
                <a
                  href="https://assetstore.unity.com/packages/tools/physics/rootpi-ropes-248288"
                  className="card-button"
                >
                  Unity Asset Store
                </a>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={Ropes}
                alt="RootPi Ropes Logo"
              />
            }
          />

          {/* Kaw AI */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">KawAI</h2>
                <p className="text">
                  KawAI is our educational YouTube channel showcasing the
                  journey of artificial intelligence learning in interactive 3D
                  environments. Watch as the cute AI progressively masters
                  complex tasks through trial and error, providing both
                  entertainment and insights into how machine learning evolves
                  over time.
                </p>
                <a
                  href="https://www.youtube.com/@KawAI-ys2my"
                  className="card-button"
                >
                  YouTube Channel
                </a>
              </div>
            }
            images={
              <img className="rounded-image" src={KawAI} alt="KawAI Logo" />
            }
          />

          {/* instapply */}
          {/* <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">instapply.se</h2>
                <p className="text">
                  Instapply transforms job applications with cutting-edge AI
                  that generates personalized cover letters in seconds. Simply
                  upload your CV and the job description, and our platform
                  creates a tailored, professional cover letter that highlights
                  your relevant experience. This tool saves valuable time and
                  increases your chances of landing interviews.
                </p>
                <a href="https://instapply.se" className="card-button">
                  Try it Now
                </a>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={Instapply}
                alt="Instapply Logo"
              />
            }
          /> */}

          {/* TimeTracker */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">TimeTracker</h2>
                <p className="text">
                  TimeTracker seamlessly logs your activities using your phone's
                  location data, eliminating the need for manual check-ins. The
                  app quietly works in the background, providing insights into
                  how you spend your time at different locations. Perfect for
                  professionals tracking billable hours or anyone wanting to
                  optimize their daily routine.
                </p>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={TimeTrack}
                alt="TimeTracker Logo"
              />
            }
          />

          {/* LundaPant */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">LundaPant</h2>
                <p className="text">
                  LundaPant makes recycling bottles and cans effortless for
                  residents of Lund. Our app shows the nearest recycling
                  stations, tracks your environmental impact, and helps manage
                  your returns. This practical tool encourages sustainability
                  while making the recycling process more convenient and
                  rewarding.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.rootpi.lunda_pant&hl=ln"
                  className="card-button"
                >
                  Google Play Store
                </a>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={LundaPant}
                alt="LundaPant Logo"
              />
            }
          />

          {/* GvHD */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">GvHD Detection System</h2>
                <p className="text">
                  Developed in partnership with Lund University researchers,
                  this medical diagnostic tool helps identify Graft versus Host
                  Disease (GvHD) from patient samples. Our solution analyzes
                  microRNA patterns to provide fast, accurate disease detection,
                  potentially improving treatment timing and patient outcomes
                  for this serious transplant complication.
                </p>
              </div>
            }
            images={
              <img className="rounded-image" src={GvHD} alt="GvHD Project" />
            }
          />

          {/* Halite */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">Halite IV</h2>
                <p className="text">
                  A master thesis project that created intelligent digital
                  agents capable of competing in the Halite IV strategy
                  competition. Our autonomous agents learned to make complex
                  decisions about resource management and tactical gameplay,
                  demonstrating how AI can master intricate competitive
                  environments through strategic learning.
                </p>
                <a
                  href="https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9059757&fileOId=9059759"
                  className="card-button"
                >
                  Read Thesis
                </a>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={HaliteIV}
                alt="Halite IV Logo"
              />
            }
          />

          {/* Crystal Quest 2 */}
          <CardProject
            textColor="black"
            width="100%"
            children={
              <div>
                <h2 className="text">Crystal Quest 2</h2>
                <p className="text">
                  Crystal Quest 2 is our captivating mobile adventure game
                  available on iOS and Android. Players embark on a journey to
                  collect precious crystals while solving puzzles and overcoming
                  obstacles in beautifully designed worlds. With intuitive
                  controls, progressive difficulty, and rewarding gameplay, it
                  offers a delightful experience for casual gamers of all ages.
                </p>
                <div className="button-group">
                  <a
                    href="https://apps.apple.com/us/app/crystal-quest-2/id1672041266"
                    className="card-button"
                  >
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.rootpi.crystalquest2&hl=sv"
                    className="card-button"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            }
            images={
              <img
                className="rounded-image"
                src={CrystalQuest2}
                alt="Crystal Quest 2 Logo"
              />
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage;
