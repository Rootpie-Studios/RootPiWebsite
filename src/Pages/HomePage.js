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
      <main className="flex flex-col mx-6 lg:mx-16">
        <div className="flex flex-col items-center ">
          <div className="flex flex-row items-center justify-between w-full max-w-4xl p-4">
            <div className="flex flex-col justify-center max-w-2xl">
              <h1 className="font-bold text-2xl mb-4">This is RootPi</h1>
              <div>
                We build fullstack and AI solutions for your needs. Our small
                team of experienced developers will work with you to create a
                custom solution, tailored to your specific needs and goals.
              </div>
              <br />
              <div>
                Do you have a project in mind or just want to know more about
                our business? Get in touch and let us help you bring your ideas
                to life!
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
            <iframe
              title="Spline"
              src="https://my.spline.design/untitled-6a905e0c5959f08e09703dc48722dd3e/"
              width="100%"
              height="300px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>

        <div className="font-bold text-xl">
          <div>Current projects</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectData.map((project) => (
            <CardProject key={project.title} {...project} />
          ))}
        </div>

        <div className="font-bold text-xl">Our tech stack</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
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
                <IconArray icons={techStackIcons} />
              </div>
            }
          />

          <Card
            textColor="black"
            children={
              <div>
                <div className="text-xl font-bold mb-2">
                  Frameworks and programs
                </div>
                <p>
                  We work with high level frameworks and programs to deliver at
                  a high speed and efficiency. From 3D modelling and game
                  engines to web- and app development software, we utilize state
                  of the art technologies to create the best possible products.
                </p>
                <div>
                  <IconArray icons={frameworksIcons} />
                </div>
              </div>
            }
          />
        </div>

        <Card>
          <div className="text-2xl font-bold p-2 ">Come in contact</div>
          <div>
            Contact us and tell us about yourself, your company, or your ideas!
          </div>
          <br />
          <span className="font-bold">RootPi AB</span>
          <br />
          <span className="font-bold">Bantorget 2</span>
          <br />
          <span className="font-bold">222 29, Lund</span>
          <br />
          <div className="flex flex-row gap-2 items-center font-bold hover:underline">
            <FiMail />
            <a href="mailto:info@rootpi.xyz">info@rootpi.xyz</a>
          </div>
          <div className="flex flex-row gap-2 items-center font-bold hover:underline">
            <FiPhone />
            <a href="tel:+46708889536">+4673 088 95 56</a>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
