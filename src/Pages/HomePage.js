import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import logo from "../images/LogoTextTransBlack.png";
import "../css/homepage.css";
// import IconWithTooltip from "../Components/IconWithTooltip";
import Button from "../Components/Button";
import CardContact from "../Components/CardContact";
import CardProject from "../Components/CardProject"; // Import ProjectCard
import IconArray from "../Components/IconArray"; // Import TechStack

// images
import VRDude from "../images/VRDude.png";
import Coder from "../images/Coder.png";
import AI from "../images/AI.png";

// Project images
import TraumaSim from "../images/traumasim_logo.png";
// import Instapply from "../images/Instapply.png";
import sago_logo from "../images/sago_logo.png";
// import ropes from "../images/RootPiRopesAssetIconHQ.png";
import ai_decoder from "../images/ai_decoder.png";

// icons
import { BsBadgeVrFill, BsUnity } from "react-icons/bs";
import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaVuejs,
  FaJava,
  FaPython,
  // FaOpenAi,
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
} from "react-icons/si";

function HomePage() {
  const projectData = [
    {
      title: "TraumaSim VR",
      icons: [
        { tooltip: "VR", icon: <BsBadgeVrFill /> },
        { tooltip: "Unity", icon: <BsUnity /> },
        { tooltip: "Blender", icon: <SiBlender /> },
        { tooltip: "C#", icon: <SiCsharp /> },
      ],
      description:
        "A VR education software for practicing realistic trauma related scenarios in a medical environment. Built in collaboration with Umeå University.",
      imgSrc: TraumaSim,
      youtubeLink: "https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g",
    },
    {
      title: "sagostund.nu",
      icons: [
        { tooltip: "VueJS", icon: <FaVuejs /> },
        { tooltip: "TailwindCSS", icon: <SiTailwindcss /> },
        { tooltip: "Python", icon: <FaPython /> },
        // ... other icons
      ],
      description:
        "A website for creating magical stories and fairy tales for your children, your friends or yourself!",
      imgSrc: sago_logo,
      youtubeLink: "sagostund.nu",
    },
    {
      title: "ai-decoder.com",
      icons: [
        { tooltip: "VueJS", icon: <FaVuejs /> },
        { tooltip: "TailwindCSS", icon: <SiTailwindcss /> },
        { tooltip: "Python", icon: <FaPython /> },
        // ... other icons
      ],
      description:
        "A website for effortless AI generation of personalized cover letter, tailored to both your own skills and for the work you are applying to.",
      imgSrc: ai_decoder,
      youtubeLink: "https://instapply.se",
    },
  ];

  const techStackIcons = [
    { tooltip: "C#", icon: <SiCsharp /> },
    { tooltip: "Python", icon: <SiPython /> },
    { tooltip: "Java", icon: <FaJava /> },
    { tooltip: "PHP", icon: <FaPhp /> },
    { tooltip: "Html5", icon: <FaHtml5 /> },
    { tooltip: "JavaScript", icon: <SiJavascript /> },
    { tooltip: "Dart", icon: <SiDart /> },
    { tooltip: "Css3", icon: <SiCss3 /> },

    // ... other icons
  ];

  const frameworksIcons = [
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

    // ... other icons
  ];

  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main style={{ marginBottom: "10vw" }}>
        <div className="home-grid-container-header">
          <div className="hidden">
            <img
              className="home-title-image-container rounded-image"
              style={{ marginLeft: "5%", marginTop: "20px" }}
              src={VRDude}
              alt=""
            />
            <img
              className="home-title-image-container rounded-image"
              style={{ marginLeft: "20%", marginTop: "50px" }}
              src={AI}
              alt=""
            />
          </div>
          <div>
            <div className="home-title">
              <h1>This is us</h1>
            </div>
            <p style={{ marginTop: "60px", fontSize: "18px" }}>
              Welcome to RootPi, we provide solutions for Virtual Reality
              applications, mobile apps and websites, and consulting services.
              Our small team of experienced developers will work with you to
              create a custom solution that is tailored to your specific needs
              and goals.
            </p>
            <br />
            <p style={{ fontSize: "18px" }}>
              {" "}
              Do you have a project in mind or just want to know more about our
              business? Contact us and let us help you bring your ideas to life.
            </p>
            <br />
            <div className="center-content">
              <Button
                textColor="white"
                label="Contact"
                onClick={() =>
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  })
                }
              />
            </div>
          </div>

          <div>
            <img
              className="home-title-image-container rounded-image coder-image"
              src={Coder}
              alt=""
            />
          </div>
        </div>

        <div className="grid-container">
          <div className="home-title">
            <h1>Current projects</h1>
          </div>
        </div>

        <div className="grid-container">
          {projectData.map((project, index) => (
            <Card key={index} textColor="black">
              <CardProject {...project} />
            </Card>
          ))}
        </div>

        <div className="grid-container">
          <h1>Our tech stack</h1>
        </div>

        <div className="grid-container2">
          <Card
            textColor="black"
            children={
              <div>
                <div>
                  <h2
                    style={{
                      marginBottom: "10px",
                      overflow: "visible",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Coding languages
                  </h2>
                  <p>
                    We have competence and years of experience in many coding
                    languages each with their own benefit to allow us to be
                    flexible and deliver products that meet your needs.
                  </p>
                </div>
                <div className="">
                  <IconArray icons={techStackIcons} />
                </div>
              </div>
            }
          />

          <Card
            textColor="black"
            children={
              <div>
                <h2
                  style={{
                    overflow: "visible",
                    whiteSpace: "nowrap",
                  }}
                >
                  Frameworks and programs
                </h2>
                <p>
                  We work with high level frameworks and programs to deliver at
                  a high speed and efficiency. From 3D modelling and game
                  engines to web- and app development software, we are confident
                  users of a variety of powerful frameworks and programs and
                  that allow us to get work done faster at a high level
                </p>
                <div className="">
                  <IconArray icons={frameworksIcons} />
                </div>
              </div>
            }
          />
        </div>

        <div>
          <CardContact
            textColor="black"
            children={
              <div>
                <h1>Come in contact</h1>
                <p>
                  Contact us and tell us about yourself, your company or your
                  ideas!
                </p>
                <br />
                <span style={{ fontWeight: "bold" }}>
                  RootPi AB, Stralsundsvägen 96
                </span>
                <br />
                <span style={{ fontWeight: "bold" }}>224 79, Lund</span>
                <br />
                <br />
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    {/* <FiMail style={{ marginTop: "5px" }} /> */}
                    <a
                      href="mailto:info@rootpi.xyz"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      info@rootpi.xyz
                    </a>
                  </span>
                </div>
              </div>
            }
          ></CardContact>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
