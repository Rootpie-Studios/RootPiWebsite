import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import "../css/storytime.css";
import StoryTimeHeader from "../Components/StoryTimeHeader";
import SagorForBarn from "../images/sagor-for-barn.png";
import Sagor from "../images/sagor.png";

function HomePage() {
  return (
    <div className="App-storytime">
      <StoryTimeHeader subtitle={<h1>Sagor</h1>} textColor="white" />
      <main style={{ margin: "100px" }}>
        <div className="grid-container2 center-content">
          <div>
            <h1 style={{ color: "white" }}>Här hittar du sagor för barn!</h1>
            <br />
            <p style={{ color: "white" }}>
              Vi har skapat en tjänst med hjälp av den nya utvecklingen av AI
              för att generera personliga sagor till barn. Vi vet att barn har
              en väldigt levande fantasi och älskar sagor och vi vill ge
              föräldrar chansen att få nya unika sagor.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Hos oss kan du skapa nya egna sagor, där du enkelt får den
              personlig till ditt eget barn. Du kan även läsa våra egna sagor
              som vi har skapat och få inspiration till dina egna sagor.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Våra bilder är framtagna med den senate tekniken inom AI, tjänsten
              heter Midjourney, den kan skapa otroliga bilder från korta
              beskrivningar.
            </p>
            <br />
            <div className="center-content">
              <Link style={{ margin: "auto" }} to="/skapa-din-egen-saga">
                <Button
                  color="rgba(0, 255, 0, 0.2)"
                  label="Generera din saga"
                />
              </Link>
              <Link style={{ margin: "auto" }} to="/sagor">
                <Button
                  color="rgba(0, 255, 0, 0.2)"
                  label="Se vårt bibliotek av sagor"
                ></Button>
              </Link>
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
        <div className="grid-container2">
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
          <div className="center-content">
            <div>
              <h2 style={{ color: "white" }}>RootPi - Vilka är vi</h2>
              <p style={{ color: "white" }}>
                Vi är ett litet företag som sitter i Lund, och vi jobbar främst
                inom mjukvara och AI. Vi skapar hemsidor och tjänster och har
                goda kunskaper med datorer. De senaste åren har utvecklingen
                inom AI tagit ordentlig fart och vi har jobbat med många projekt
                där vi sett hur bra AI kan vara. Från detta har denna idé
                uppstått där vi hoppas att AI kan vara till hjälp för många
                mindre saker i vår vardag.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer textColor="white" />
    </div>
  );
}

export default HomePage;
