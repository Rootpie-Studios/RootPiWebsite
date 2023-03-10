import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import StoryTimeHeader from "../Components/StoryTimeHeader";
import Sagor from "../images/sagor.png";
import SagorForBarn from "../images/sagor-for-barn.png";

function SagorPage() {
  return (
    <div className="App-storytime">
      <StoryTimeHeader subtitle={<h1>Sagor</h1>} textColor="white" />
      <main style={{ margin: "100px" }}>
        <div className="grid-container2">
          <h1 style={{ color: "white" }}>
            Här är några sagor som vi själva skrivit
          </h1>
        </div>
        <Link
          style={{ marginRight: "10%", textDecoration: "none" }}
          to="/sagan-om-alfred"
        >
          <div className="grid-container2 border">
            <div className="center-content" style={{ padding: "20px" }}>
              <div>
                <h2 style={{ color: "white" }}>
                  Sagan om Alfred och den stora björnen
                </h2>
                <br />
                <p style={{ color: "white" }}>
                  I den här sagan följer vi pojken Alfred och hans vita vän,
                  Murmeldjuret Risi, som älskar att lyssna på sagor. En kväll
                  avbryts deras läsning av ett högt brummande ljud, och de
                  upptäcker att en ensam björn har irrat sig in i deras
                  trädgård. Istället för att vara rädda, visar Alfred och Risi
                  medkänsla och hjälper björnen att hitta sina vänner i skogen.
                  Genom att hjälpa en främling lär sig Alfred vikten av att vara
                  empatisk och hjälpsam mot andra.
                </p>
              </div>
            </div>
            <Link
              className="center-content"
              style={{ marginRight: "10%" }}
              to="/sagan-om-alfred"
            >
              <img
                className="home-title-image-container home-rounded-image"
                style={{ marginLeft: "10%" }}
                src={SagorForBarn}
                alt=""
              />
            </Link>
          </div>
        </Link>
        <Link
          style={{ marginRight: "10%", textDecoration: "none" }}
          to="/sagan-om-binlo"
        >
          <div className="grid-container2 border">
            <Link
              className="center-content"
              style={{ marginRight: "10%" }}
              to="/sagan-om-binlo"
            >
              <img
                className="home-title-image-container home-rounded-image"
                src={Sagor}
                alt=""
              />
            </Link>
            <div className="center-content" style={{ padding: "20px" }}>
              <div>
                <h2 style={{ color: "white" }}>
                  En oväntad hjälte: Binlo i byn
                </h2>
                <br />
                <p style={{ color: "white" }}>
                  Sagan handlar om ett litet troll vid namn Binlo som bor ensam
                  i en stuga mitt i skogen. Han är inte som de andra trollen och
                  föredrar att vara ensam istället för att jaga och lura
                  människor. En dag hittar han en flicka som har tappat bort
                  sina föräldrar i skogen och bestämmer sig för att hjälpa
                  henne. Tillsammans hittar de flickans hem och Binlo lär känna
                  människorna i byn. Efter att ha flyttat in i byn och fått en
                  stuga vid utkanten, blir Binlo en del av samhället och lär sig
                  mycket om människornas sätt att leva. Han är glad över att ha
                  hittat ett hem där han känner sig älskad och accepterad.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </main>
      <Footer textColor="white" />
    </div>
  );
}

export default SagorPage;
