import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardPortfolio from "../Components/CardPortfolio";
import logo from "../images/LogoTextTransBlack.png";
import { Link } from "react-router-dom";

// Images
import TraumaSim from "../images/traumasim_logo.webp";
import Instapply from "../images/Instapply.png";
import HaliteIV from "../images/HaliteIV.png";
import CrystalQuest2 from "../images/CrystalQuest2.png";
import Nifti from "../images/Nifti.png";
import LundaPant from "../images/LundaPant.png";
import Ropes from "../images/RootPiRopesAssetIconHQ.png";
import SagoLogo from "../images/sago_logo.png";
import TimeTrack from "../images/TimeTrackBadLogo.png";
import GvHD from "../images/GvHD.jpg";
import DecoderOwl from "../images/decoder_owl.png";
import KawAI from "../images/KawAI.png";
import MappLogo from "../images/MappLogo.png";

import {
  AppStoreIcon,
  BlenderIcon,
  DartIcon,
  FlutterIcon,
  GooglePlayIcon,
  KerasIcon,
  PythonIcon,
  UnityIcon,
  VirtualRealityIcon,
  VueIcon,
  CSharpIcon,
  FirebaseIcon,
  JavaScriptIcon,
  OpenAIIcon,
  NumpyIcon,
  ReactIcon,
  TailwindIcon,
  LaravelIcon,
} from "../Components/IconLibrary";

function PortfolioPage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <h1 className="center-content">Portfolio</h1>

        {/* Mapp */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">MAPP</h2>
              <p className="text">
                <b>MAPP</b> is an innovative agricultural company providing
                advanced solutions for modern farming. They focus on mapping,
                analysis, planning, and precision agriculture. Built with{" "}
                <b>Laravel</b> and <b>Vue3</b> for <b>AgroMapp Sverige AB</b>.
                Find out more on their website.
              </p>
              <br />
              <a href="https://mapp.se">mapp.se</a>
              <br />
            </div>
          }
          icons={
            <h1>
              <LaravelIcon />
              <VueIcon />
            </h1>
          }
          images={
            <img className="rounded-image" src={MappLogo} alt="Mapp Logo" />
          }
        />

        {/* TraumaSim VR*/}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">TraumaSim VR</h2>
              <p className="text">
                A <b>VR-simulation</b> for education of hospital personnel and
                students. In collaboration with Umeå University we are
                developing a VR simulation for training on practical aspects of
                acuta trauma care. The application is developed in <b>Unity</b>{" "}
                with <b>C#</b> and is currently being built and tailored for the
                needs of the students. The work involves VR-centered programming
                and design, discussions with experienced doctors at Umeå
                University, 3D-modelling and animation in <b>Blender</b> as well
                as sound handling and intuitive VR interface building.
              </p>
              <br />
              <div style={{ marginBottom: "10px" }}>
                <a href="https://www.umu.se/reportage/vr---framtidens-undervisning/">
                  Article about the project
                </a>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <a href="https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g">
                  YouTube channel
                </a>
                <br />{" "}
              </div>

              <div>
                <p>
                  <Link to="/traumasim-privacy-policy">
                    TraumaSim Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          }
          icons={
            <h1>
              <UnityIcon />
              <BlenderIcon />
              <CSharpIcon />
              <VirtualRealityIcon />
            </h1>
          }
          images={<img className="rounded-image" src={TraumaSim} alt="" />}
        />
        {/* sagostund.nu */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">sagostund.nu</h2>
              <p className="text">
                Sagostund is a website where you can generate a narrated,
                completely unique story from only a text input. You can try
                creating your own story now on our website! It is built with{" "}
                <b>Python</b>, utilizing state of the art AI text and image
                generation as well as text-to-speech, via <b>OpenAI</b> API:s.
              </p>
              <br />
              <a href="https://sagostund.nu/skapa-din-egen-saga">
                sagostund.nu
              </a>
              <br />
            </div>
          }
          icons={
            <h1>
              <PythonIcon />
              <OpenAIIcon />
              <VueIcon />
              <TailwindIcon />
            </h1>
          }
          images={
            <a href="https://sagostund.nu/">
              <img className="rounded-image" src={SagoLogo} alt="" />
            </a>
          }
        />
        {/* Niftitech */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">Consulting for Niftitech</h2>
              <p className="text">
                We provide services in development in <b>Flutter</b> and{" "}
                <b>Laravel</b> development for the company Niftitech.
              </p>
              <br />
            </div>
          }
          icons={
            <h1>
              <FlutterIcon />
              <LaravelIcon />
            </h1>
          }
          images={<img className="rounded-image" src={Nifti} alt="" />}
        />
        {/* ai-decoder */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">ai-decoder.com</h2>
              <p className="text">
                AI-decoder is a completely web based alternative to traditional
                biobanking. It allows the user to upload images of 96-well
                plates, decode the code and send them to a slot in a freezer,
                allowing for a seamless integration with a digital storage
                system. Please send us an email if you are interested in trying
                it. It is built built with <b>Vue</b> and <b>Tailwind</b>.
              </p>
              <br />
              <a href="https://ai-decoder.com">ai-decoder.com</a>
              <br />
            </div>
          }
          icons={
            <h1>
              <PythonIcon />
              <VueIcon />
              <TailwindIcon />
              <FirebaseIcon />
            </h1>
          }
          images={<img className="rounded-image" src={DecoderOwl} alt="" />}
        />

        {/* Ropes */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">RootPi Ropes</h2>
              <p className="text">
                RootPi Ropes is a toolkit for easily integrating ropes and tubes
                in a <b>Unity</b> based 3D environment. It is built with Unity,
                code for the physics simulations written in <b>C#</b> and it is
                available as a purchasable asset on the Unity Asset Store.{" "}
              </p>
              <br />
              <a href="https://assetstore.unity.com/packages/tools/physics/rootpi-ropes-248288">
                RootPi Ropes
              </a>
              <br />
            </div>
          }
          icons={
            <h1>
              <UnityIcon />
              <CSharpIcon />
            </h1>
          }
          images={<img className="rounded-image" src={Ropes} alt="" />}
        />
        {/* Kaw AI */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">KawAI</h2>
              <p className="text">
                KawAI is a youtube channel where we post videos showing off an
                AI agent's learning process in different environments in Unity
                as it implements Reinforcement Learning algorithms. The
                simulation is built with <b>Unity</b> and <b>C#</b>.
              </p>
              <br />
              <a href="https://www.youtube.com/@KawAI-ys2my">Kaw AI</a>
              <br />
            </div>
          }
          icons={
            <h1>
              <UnityIcon />
              <CSharpIcon />
            </h1>
          }
          images={<img className="rounded-image" src={KawAI} alt="" />}
        />
        {/* instapply */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">instapply.se</h2>
              <p className="text">
                A platform for generating a personal cover letter based on
                inputting only your CV and the ad for the position you are
                applying for. Using state of the art AI language models and a
                clean interface you can get your cover letter written in seconds
                completely free. The application is written in <b>React</b>{" "}
                (with <b>JavaScript</b> and <b>Python</b>), database handling
                via <b>Firebase</b> and is implementing LLM API:s from{" "}
                <b>OpenAI</b>.
              </p>
              <br />
              <a href="https://instapply.se">instapply.se</a>.
              <br />
            </div>
          }
          icons={
            <h1>
              <ReactIcon />
              <JavaScriptIcon />
              <PythonIcon />
              <FirebaseIcon />
              <OpenAIIcon />
            </h1>
          }
          images={<img className="rounded-image" src={Instapply} alt="" />}
        />
        {/* TimeTracker */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">TimeTracker</h2>
              <p className="text">
                TimeTracker is an app that tracks your activites from the GPS on
                your phone, allowing you to automatically track where you spend
                your time without checking in. Everything is handled
                automatically! Get a better overview of your life, whether you
                want to track your work, training, school or other habits.
                Activites are recorded in a calendar giving you an overview of
                where spend your time on a day to day basis. It is built with{" "}
                <b>Flutter</b> and <b>Dart</b> with <b>Firebase</b>. Available
                for download on <b>App Store</b> and <b>Play Store</b>
              </p>
              <br />
            </div>
          }
          icons={
            <h1>
              <DartIcon />
              <FlutterIcon />
              <FirebaseIcon />
              <AppStoreIcon />
              <GooglePlayIcon />
            </h1>
          }
          images={<img className="rounded-image" src={TimeTrack} alt="" />}
        />

        {/* LundaPant */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">LundaPant</h2>
              <p className="text">
                LundaPant is an app for getting rid of empty cans and bottles
                without leaving your home, while still making sure they will be
                recycled. They app was developed with <b>Flutter</b>,{" "}
                <b>Dart</b> and <b>Firebase</b> and is available for free on{" "}
                <b>App Store</b> and <b>Play Store</b>
              </p>
              <br />
            </div>
          }
          icons={
            <h1>
              <DartIcon />
              <FlutterIcon />
              <FirebaseIcon />
              <AppStoreIcon />
              <GooglePlayIcon />
            </h1>
          }
          images={<img className="rounded-image" src={LundaPant} alt="" />}
        />

        {/* GvHD */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">ML-classification GvHD with MicroRNA</h2>
              <p className="text">
                In collaboration with researchers at Lund University we created
                a neural network based binary classifier for determining whether
                a patient has or does not have Graft versus Host Disease (GvHD)
                based on MicroRNA data. Our results indicated that machine
                learning can indeed be combined with micro-RNA data in order to
                determine positive/negative status of GvHD for a patient. The
                work was done in <b>Python</b> and the algorithms utilized the{" "}
                <b>Keras</b> API.
              </p>
              <br />
            </div>
          }
          icons={
            <h1>
              <PythonIcon />
            </h1>
          }
          images={<img className="rounded-image" src={GvHD} alt="" />}
        />

        {/* Crystal Quest */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">
                Crystal Quest: Rainbow and Crystal Quest 2
              </h2>
              <p className="text">
                The enormously anticipated sequel of the smash hit Crystal King:
                Crystal Quest - Rainbow! With the same intense, never ending
                arcade style gameplay but with 6 more levels, 2 thrilling boss
                fights and brand new a shop filled with gear to unlock, this
                adventure will send you to the skies! Available on{" "}
                <b>App Store</b> and <b>Play Store</b>, built in <b>Unity</b>{" "}
                with <b>C#</b> and 3D models created with <b>Blender</b>.
              </p>
              <br />
            </div>
          }
          icons={
            <h1>
              <UnityIcon />
              <BlenderIcon />
              <CSharpIcon />
              <AppStoreIcon />
              <GooglePlayIcon />
            </h1>
          }
          images={<img className="rounded-image" src={CrystalQuest2} alt="" />}
        />

        {/* Halite IV */}
        <CardPortfolio
          textColor="black"
          width="60%"
          children={
            <div>
              <h2 className="text">Deep Reinforcement Learning in Halite IV</h2>
              <p className="text">
                For our master thesis at Lund University, LTH at the department
                of Automatic Control we investigated the field of{" "}
                <b>Deep Reinforcement Learning (DRL)</b>. We built a program
                capable of setting up and training agents using DRL techniques
                and testing them in the competitive game environment Halite IV.
                Our RL agents outperformed some previously created algorithmic
                agents. Our full results are presented in our master thesis done
                at LTH and the software was developed in <b>Python</b> and
                powerful packages including <b>Numpy</b> and <b>Keras</b>.
              </p>
              <br />
            </div>
          }
          icons={
            <h1>
              <PythonIcon />
              <KerasIcon />
              <NumpyIcon />
            </h1>
          }
          images={<img className="rounded-image" src={HaliteIV} alt="" />}
        />
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage;
