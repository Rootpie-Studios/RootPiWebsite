import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import "../css/aboutpage.css";
import Kim from "../images/Kim.webp";
import Jesper from "../images/jesper.webp";

const teamMembers = [
  {
    name: "Kim Haapamäki",
    title: "Co-founder",
    image: Kim,
    description:
      "M.Sc. Computer Science Engineering, LTH, Sweden. A passion for game development and Machine Learning. Developing Unity games, consulting expertise in VR/ML, mobile and web app development.",
  },
  {
    name: "Jesper Laurell",
    title: "Co-founder",
    image: Jesper,
    description:
      "M.Sc. Electrical Engineering, LTH, Sweden. Interested in VR, game development and design, Unity, Generative AI, Python, image analysis, UI, and UX.",
  },
];

const TeamMemberCard = ({ name, title, image, description }) => (
  <div className="team-member-card">
    <img
      className="about-image-container rounded-image"
      src={image}
      alt={name}
      loading="lazy"
    />
    <div className="card">
      <h2>{name}</h2>
      <h3 className="member-title">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

function TeamPage() {
  return (
    <div className="App">
      <Header
        subtitle={
          <img
            className="header-image-container"
            src={logo}
            alt="Company Logo"
          />
        }
      />
      <main className="about-page-main">
        <div className="about-page-container">
          <div className="about-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <h1 className="section-title">Team</h1>
            </div>
            <div className="about-grid">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={member.name}
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  description={member.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TeamPage;
