import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CircularImage from "../Components/CircularImage";
import logo from "../images/LogoTextTransBlack.png";
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
      "M.Sc. Electrical Engineering, LTH, Sweden. Interested in UX, generative AI, game design, and incremental self improvement.",
  },
];

const TeamMemberCard = ({ name, title, image, description }) => (
  <div className="flex flex-col items-center w-full bg-surface rounded-2xl border border-outline p-8 mb-4">
    <CircularImage
      className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mb-6"
      src={image}
      alt={name}
      shadowSize="md"
    />
    <div className="w-full text-center">
      <h2 className="text-2xl md:text-3xl mb-2 text-ink font-semibold font-display">
        {name}
      </h2>
      <h3 className="text-xs md:text-sm text-ink-subtle mb-4 font-medium tracking-widest uppercase inline-block relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-accent pb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed text-ink-muted mt-6">
        {description}
      </p>
    </div>
  </div>
);

function TeamPage() {
  return (
    <div className="App">
      <Header
        subtitle={
          <img className="header-image-container" src={logo} alt="Company Logo" />
        }
      />
      <main className="w-full overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto px-5 w-full">
          <div className="flex flex-col items-center w-full pb-8">
            <div className="flex justify-center w-full">
              <h1 className="section-title">Team</h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
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
