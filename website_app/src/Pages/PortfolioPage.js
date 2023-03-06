import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import CardPortfolio from '../Components/CardPortfolio';
import logo from '../images/LogoTextTransBlack.png';
import '../css/portfoliopage.css';

import { FaMapMarkedAlt, FaVrCardboard, FaBlender, FaPython, FaReact, FaUnity } from 'react-icons/fa';
import { SiCsharp, SiDart, SiBlender, SiFirebase, SiJavascript, SiPython, SiOpenai,  SiLatex, SiFlutter, SiGoogleplay, SiAppstore } from 'react-icons/si';
import { BsQrCode } from 'react-icons/bs';


function PortfolioPage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='image-container' src={logo} alt="" />} />
      <main>
        
        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>TraumaSim VR</h2>
            <p>A VR-simulation for education of hospital personnel and students. In collaboration with Umeå university we are developing a VR simulation for enabling training of otherwise expensive and cumbersome parts of the education that are essential for being a successful professional in the medical industry. The application is developed in Unity with C# and is currently being built. The work involves VR-centered programming and design, discussions with medical professionials from Umeå, 3D-modelling and animation in Blender as well as sound handling and intuitive VR interface building. </p>
            
            <br/>
          </div>
        } images = {<h1><FaVrCardboard /> <FaUnity /> <SiCsharp /> <SiBlender /></h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>instapply.se, AI cover letters</h2>
            <p>With the use of the recent advances in NLP in AI we have built a platform for generating a personal cover letter based on inputting only your CV and information about the job, such as the job ad itself. It is completely free and in a matter of seconds you can have your next cover letter written in front of you with the help of our algorithms. 
            </p>
            <br/>
          </div>
        } images = {<h1><FaReact /> <SiJavascript /> <SiPython /> <SiFirebase /> <SiOpenai /></h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>Image analysis on datamatrix test-tubes for Treat4Life</h2>
            <p> </p>
            <br/>
          </div>
        } images = {<h1><SiPython /> <BsQrCode /></h1>}/> 

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>RootPi Ropes</h2>
            <p> </p>
            <br/>
          </div>
        } images = {<h1><FaUnity /> <SiCsharp /> <SiBlender /> </h1>}/>



        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>TimeTracker</h2>
            <p>TimeTracker tracks your activites from the GPS on your phone, allowing you to automatically track where you spend your time without checking in. Everything is handled automatically! Get a better overview of your life, whether you want to track your work, training, school or other habits. Activites are recorded in a calendar giving you an overview of where spend your time on a day to day basis. </p>
            <br/>
          </div>
        } images = {<h1><SiFlutter /> <SiDart /> <SiFirebase /> <SiAppstore /> <SiGoogleplay /> <FaMapMarkedAlt/></h1>}/>

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>TimeTracker</h2>
            <p></p>
            <br/>
          </div>
        } images = {<h1><SiFlutter /> <SiDart /> <SiFirebase /> <SiAppstore /> <SiGoogleplay /> <FaMapMarkedAlt/></h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>ML-classification GvHD with MicroRNA</h2>
            <p></p>
            <br/>
          </div>
        } images = {<h1><SiPython /> <SiLatex/></h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>Crystal Quest 1 and 2</h2>
            <p></p>
            <br/>
          </div>
        } images = {<h1><FaUnity /> <SiCsharp /> <SiBlender /> <SiAppstore /> <SiGoogleplay /></h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>Deep Reinforcement Learning in Halite IV; a multi-agent environment</h2>
            <p></p>
            <br/>
          </div>
        } images = {<h1><SiPython /> <SiLatex /></h1>}/>
      </main>
      <Footer/>
    </div>
  );
}

export default PortfolioPage;