import React from "react";
import Footer from "../Components/Footer";
import StoryTimeHeader from "../Components/StoryTimeHeader";
import SagorForBarn from "../images/sagor-for-barn.png";

function AlfredsSaga() {
  return (
    <div className="App-storytime">
      <StoryTimeHeader subtitle={<h1>Sagor</h1>} textColor="white" />
      <main style={{ margin: "100px" }}>
        <div className="grid-container2">
          <div>
            <h2 style={{ color: "white" }}>Alfred och den stora björnen</h2>
            <br />
            <p style={{ color: "white" }}>
              Det var en gång en pojke som hette Alfred. Han hade ett
              passionerat intresse för sagor och älskade att läsa dem högt för
              sin vita vän, Murmeldjuret Risi. Varje kväll när solen hade gått
              ner och stjärnorna tittade fram, satte de sig tillsammans vid
              fönstret och Alfred började läsa en ny saga.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Risi var en tystlåten varelse, men han lyssnade alltid uppmärksamt
              på varje ord som Alfred uttalade. Han fascinerades av sagorna och
              insåg att varje berättelse hade en underliggande moral som han
              kunde lära sig av.
            </p>
            <br />
            <p style={{ color: "white" }}>
              En kväll när Alfred var mitt i en saga, avbröts han av ett högt
              brummande ljud som kom från utsidan. Risi stelnade till och Alfred
              insåg att något inte stod rätt till. Han stod upp och försökte se
              vad som pågick utanför fönstret. Det var en enorm björn som rörde
              sig genom trädgården, vilket orsakade allt oväsen.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Alfred visste att björnen var farlig och att de var tvungna att
              göra något för att skydda sig själva. Han tog ett djupt andetag
              och bestämde sig för att handla. Han öppnade försiktigt fönstret
              och började prata med björnen. "Hej där, vem är du?" frågade han
              mjukt.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Björnen svarade med ett dämpat morr. "Jag är en ensam varelse som
              vandrar genom skogen. Jag har tappat bort mina vänner och letar
              efter någon som kan hjälpa mig att hitta dem igen."
            </p>
            <br />
            <p style={{ color: "white" }}>
              Alfred förstod att björnen var ensam och rädd och kände sympati
              för honom. Han insåg att det var hans chans att visa Risi hur
              viktigt det var att visa medkänsla och att hjälpa de som behövde
              det. Han föreslog att de skulle hjälpa björnen att hitta sina
              vänner och björnen blev överlycklig.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Tillsammans med Risi och björnen gick de in i skogen på jakt efter
              björnens vänner. Efter många timmar hittade de dem till slut i en
              grotta djupt inne i skogen. Björnen var tacksam och glad att vara
              med sina vänner igen, och tackade Alfred och Risi för all hjälp.
            </p>
            <br />
            <p style={{ color: "white" }}>
              När de återvände till fönstret och satt ner igen, insåg Alfred att
              han hade lärt sig något viktigt den kvällen. Att ibland behöver
              man bara visa medkänsla och hjälpa de som behöver det, och det kan
              leda till fantastiska äventyr och nya vänner.
            </p>
            <br />
            <p style={{ color: "white" }}>
              Risi log och Alfred visste att han hade förstått vad hans vän
              försökte säga till honom. De fortsatte att läsa sagor tillsammans
              varje kväll, men nu med en ny förståelse och ett större hjärta.
            </p>
          </div>
          <img
            className="home-title-image-container home-rounded-image"
            style={{ marginLeft: "20%" }}
            src={SagorForBarn}
            alt=""
          />
        </div>
      </main>
      <Footer textColor="white" />
    </div>
  );
}

export default AlfredsSaga;
