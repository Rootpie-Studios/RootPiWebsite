import React from "react";
import "../css/homepage.css";
import { projectData, techStackIcons, frameworksIcons } from "../Constants";

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Button from "../Components/Button";
// import CardContact from "../Components/CardContact";
import CardProject from "../Components/CardProject";
import IconArray from "../Components/IconArray";

// images
import RootPiText from "../images/LogoTextTransBlack.png";
// import VRDude from "../images/VRDude.png";
// import Coder from "../images/Coder.png";
// import AI from "../images/AI.png";

import { FiMail, FiPhone } from "react-icons/fi";

function HomePage() {
  return (
    <div className="App">
      <Header
        subtitle={
          <img
            className="header-image-container"
            src={RootPiText}
            alt="RootPi Logo"
          />
        }
      />
      <main>
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center max-w-2xl">
            <div>
              <h1 className="font-bold text-2xl mb-4">This is RootPi</h1>
            </div>
            <div>
              We build fullstack and AI solutions for your needs. We are here to
              help you bring your ideas to life! Our small team of experienced
              developers will work with you to create a custom solution,
              tailored to your specific needs and goals.
            </div>
            <br />
            <div>
              Do you have a project in mind or just want to know more about our
              business? Get in touch and let us help you bring your ideas to
              life!
            </div>
            <br />
            <div className="flex justify-center">
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
        </div>

        <div className="font-bold text-xl">
          <div>Current projects</div>
        </div>

        <div className="grid-container">
          {projectData.map((project) => (
            <CardProject {...project} />
          ))}
        </div>

        <div className="grid-container">
          <div>Our tech stack</div>
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
                  engines to web- and app development software, we utilize state
                  of the art technologies to create the best possible products.
                </p>
                <div className="">
                  <IconArray icons={frameworksIcons} />
                </div>
              </div>
            }
          />
        </div>

        <Card textColor="black">
          <div>
            <div className="text-2xl font-bold p-2">Come in contact</div>
            <div>
              Contact us and tell us about yourself, your company, or your
              ideas!
            </div>
            <br />
            <span style={{ fontWeight: "bold" }}>RootPi AB</span>
            <br />
            <span style={{ fontWeight: "bold" }}>Bantorget 2</span>
            <br />
            <span style={{ fontWeight: "bold" }}>222 29, Lund</span>
            <br />
            <br />
            <div className="flex items-center font-bold">
              <FiMail />
              <a
                href="mailto:info@rootpi.xyz"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
              >
                info@rootpi.xyz
              </a>
            </div>
            <div className="flex items-center font-bold mt-2">
              <FiPhone />
              <a
                href="tel:+46708889536"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
              >
                +4673 088 95 56
              </a>
            </div>
          </div>
        </Card>

        <iframe
          title="Spline"
          src="https://my.spline.design/untitled-6a905e0c5959f08e09703dc48722dd3e/"
          width="100%"
          height="300px"
          style={{ border: "none" }}
        ></iframe>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
