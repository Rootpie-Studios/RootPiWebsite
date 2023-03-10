import React from "react";
import Footer from "../Components/Footer";
import StoryTimeHeader from "../Components/StoryTimeHeader";
import Sagor from "../images/sagor.png";

function SaganOmBinlo() {
  return (
    <div className="App-storytime">
      <StoryTimeHeader subtitle={<h1>Sagor</h1>} textColor="white" />
      <main style={{ margin: "100px" }}>
        <div className="grid-container2">
          <div>
            <h2 style={{ color: "white" }}>En oväntad hjälte: Binlo i byn</h2>
            <br />
            <p style={{ color: "white" }}>
              Det var en gång ett litet troll som hette Binlo. Han levde ensam i
              en liten stuga mitt i skogen. Binlo var inte som de andra trollet
              i skogen, han var snäll och vänlig och föredrog att vara ensam
              istället för att jaga och lura människor.
            </p>
            <br />
            <p style={{ color: "white" }}>
              En dag, medan Binlo var ute och letade efter bär i skogen, hörde
              han någon gråta. Han följde ljudet och hittade en liten
              människoflicka som hade tappat bort sin mamma och pappa. Binlo
              frågade flickan vad som hade hänt och hon berättade att hon hade
              gått vilse när hon försökte följa en fjäril.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Binlo bestämde sig för att hjälpa flickan och började leta efter
              hennes föräldrar. Efter en stund hittade de en flock av fåglar som
              körde runt en avlägsen by. Binlo visste att det var flickans hem
              och bestämde sig för att föra henne tillbaka dit.
            </p>
            <br />
            <p style={{ color: "white" }}>
              När de kom till byn möttes de av ett jubel från människorna som
              hade letat efter flickan hela dagen. Flickans föräldrar var
              överlyckliga och tackade Binlo för att han hade hittat deras
              dotter. Binlo kände sig varm och glad inuti och visste att han
              hade gjort något riktigt bra.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Efter den dagen började Binlo besöka byn oftare. Han lärde känna
              människorna och hjälpte till med arbetet på åkrarna. Människorna
              var förvånade över att se ett trolle hjälpa dem, men de lärde sig
              att Binlo var annorlunda än de andra trollen i skogen.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Så småningom bestämde sig Binlo för att flytta in i byn och bo med
              människorna. Han fick en liten stuga vid utkanten av byn och kände
              sig som en del av samhället. Binlo och människorna blev vänner och
              han lärde sig mycket om människornas sätt att leva.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Binlo visste att han alltid skulle vara lite annorlunda, men det
              gjorde inte längre något. Han var glad över att ha hittat ett hem
              där han kände sig älskad och accepterad. Och när han tänkte
              tillbaka på den dagen han hittade flickan i skogen, insåg han att
              det var det bästa som någonsin hade hänt honom.
            </p>
          </div>
          <img
            className="home-title-image-container home-rounded-image"
            style={{ marginLeft: "20%" }}
            src={Sagor}
            alt=""
          />
        </div>
      </main>
      <Footer textColor="white" />
    </div>
  );
}

export default SaganOmBinlo;
