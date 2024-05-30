import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import Kim from "../images/kim.jpg";
import Jesper from "../images/jesper.jpg";

const teamMembers = [
  {
    name: "Kim Haapamäki",
    image: Kim,
    description:
      "M.Sc. Computer Science Engineering, LTH, Sweden. A passion for game development and Machine Learning. Developing Unity games, consulting expertise in VR/ML, mobile and web app development.",
  },
  {
    name: "Jesper Laurell",
    image: Jesper,
    description:
      "M.Sc. Electrical Engineering, LTH, Sweden. Interested in VR, game development and design, Unity, Generative AI, Python, image analysis, UI, and UX.",
  },
];

const TeamMemberCard = ({ name, image, description }) => (
  <div className="flex flex-col items-center m-5">
    <img
      className="w-64 h-64 md:w-96 md:h-96 rounded-full shadow-md mb-5 object-cover"
      src={image}
      alt={name}
    />
    <div className="bg-white text-start p-5 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#eeeeee] to-[#aaaaaa]">
      <Header
        subtitle={
          <img
            className="w-36 md:w-72 hover:opacity-80 transition-opacity duration-300"
            src={logo}
            alt="Company Logo"
          />
        }
      />
      <main className="flex-grow text-center py-10 w-full">
        <h1 className="text-3xl font-bold mb-10">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center px-6">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
