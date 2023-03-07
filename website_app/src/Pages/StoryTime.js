import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Button from "../Components/Button";
import "../css/storytime.css";

function HomePage() {
  return (
    <div className="App-storytime">
      <Header subtitle={<h1>Storytime</h1>} textColor="white" />
      <main>
        <Card
          color="rgba(0, 0, 0, 0.2)"
          textColor="white"
          children={
            <div>
              <h2>Få din personliga saga att läsa till dina barn!</h2>
              <p>
                Vi har skapat en tjänst med hjälp av den nya utvecklingen av AI
                för att generera personliga sagor till barn. Vi vet att barn har
                en väldigt levande fantasi och älskar sagor och vi vill ge
                föräldrar chansen att få nya sagor som handlar om egna
                erfarenheter eller personliga moraler enkelt och snabbt.{" "}
              </p>
              <br />
              <p>
                Tjänsten är gratis att testa! Ifall ni uppskattar tjänsten så
                hjälper det oss enorm mycket om ni delar med er till andra om
                oss!
              </p>
            </div>
          }
        />

        <div className="center">
          <Button color="rgba(0, 255, 0, 0.2)" label="Generera din saga" />
        </div>
      </main>
      <Footer textColor="white" />
    </div>
  );
}

export default HomePage;
