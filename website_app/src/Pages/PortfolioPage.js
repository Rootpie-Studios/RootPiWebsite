import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import CardPortfolio from '../Components/CardPortfolio';
import logo from '../images/LogoTextTransBlack.png';
import '../css/portfoliopage.css';

import { FaReact } from 'react-icons/fa';
import { SiCsharp, SiDart, SiBlender, SiFirebase, SiJavascript, SiMicrosoftazure, SiPython, SiOpenai, SiFlutter, SiGoogleplay, SiAppstore, SiKeras, SiLaravel, SiNumpy  } from 'react-icons/si';
import { BsBadgeVrFill, BsUnity } from 'react-icons/bs';


function PortfolioPage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='image-container' src={logo} alt="" />} />
      <main>
        
        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>TraumaSim VR</h2>
            <p>A <b>VR-simulation</b> for education of hospital personnel and students. In collaboration with Umeå University we are developing a VR simulation for training on practical and stressful aspects of the job as a medical professional. The application is developed in <b>Unity</b> with <b>C#</b> and is currently being built and tailored for the needs of the students. The work involves VR-centered programming and design, discussions with experienced doctors at Umeå University, 3D-modelling and animation in <b>Blender</b> as well as sound handling and intuitive VR interface building. </p>
            
            <br/>
          </div>
        } images = {<h1><BsBadgeVrFill /> <BsUnity /> <SiCsharp /> <SiBlender /></h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>instapply.se, AI cover letters</h2>
            <p>With the use of the recent advances in NLP in AI we have built a platform for generating a personal cover letter based on inputting only your CV and the ad for the position you are applying for. It is completely free and in a matter of seconds you can have your next cover letter written in front of you with the help of our algorithms. The application is written in <b>React</b> (with <b>JavaScript</b> and  <b>Python</b>), database handling via <b>Firebase</b> and is implementing the GPT-3 API from <b>OpenAI</b>. Available on <a href="instapply.se">instapply.se</a>.
            </p>
            <br/>
          </div>
        } images = {<h1><FaReact /> <SiJavascript /> <SiPython /> <SiFirebase /> <SiOpenai /></h1>}/>

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>RootPi Storytime</h2>
            <p>Using <b>Python</b>, text-to-speech API:s via <b>Microsoft Azure</b>, and state of the art AI text and image generation via <b>OpenAI</b> we have built a tool for generating a narrated story with AI created images from only a text input. Sample stories can be found on the YouTube channel <a href="https://www.youtube.com/@rootpistorytime">RootPi Storytime</a>. 
            </p>
            <br/>
          </div>
        } images = {<h1><SiPython /> <SiOpenai /> <SiMicrosoftazure /> <SiFirebase /> </h1>}/>

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>DatamatrixDecoder: Image analysis tool for datamatrices</h2>
            <p>Using image analysis and <b>Python</b> we developed a tool for decoding images containing several small datamatrices (compact QR-codes). The tool was built for the company Treat4Life in order to improve efficiency and reduce costs for handling of medical test tubes containing blood and tissue samples. </p>
            <br/>
          </div>
        } images = {<h1><SiPython /> </h1>}/> 

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>RootPi Ropes</h2>
            <p>RootPi Ropes is a toolkit for easily integrating ropes and tubes in a <b>Unity</b> based 3D environment. It is built with Unity, code for the physics simulations written in <b>C#</b> and it is available as a purchasable asset on the Unity Asset Store.  </p>
            <br/>
          </div>
        } images = {<h1><BsUnity /> <SiCsharp /> </h1>}/>



        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>TimeTracker</h2>
            <p>TimeTracker is an app that tracks your activites from the GPS on your phone, allowing you to automatically track where you spend your time without checking in. Everything is handled automatically! Get a better overview of your life, whether you want to track your work, training, school or other habits. Activites are recorded in a calendar giving you an overview of where spend your time on a day to day basis. It is built with <b>Flutter</b> and <b>Dart</b> with <b>Firebase</b>. Available for download on <b>App Store</b> and <b>Play Store</b></p>
            <br/>
          </div>
        } images = {<h1><SiFlutter /> <SiDart /> <SiFirebase /> <SiAppstore /> <SiGoogleplay /> </h1>}/>

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>LundaPant</h2>
            <p>LundaPant is an app for getting rid of empty cans and bottles without leaving your home, while still making sure they will be recycled. They app was developed with <b>Flutter</b>, <b>Dart</b> and <b>Firebase</b> and is available for free on <b>App Store</b> and <b>Play Store</b></p>
            <br/>
          </div>
        } images = {<h1><SiFlutter /> <SiDart /> <SiFirebase /> <SiAppstore /> <SiGoogleplay /> </h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>ML-classification GvHD with MicroRNA</h2>
            <p>Using a data set consisting of micro-RNA data created by researchers at Lund University we created a neural network based binary classifier for determining whether a patient has or does not have Graft versus Host Disease (GvHD). Our results indicated that machine learning can indeed be combined with micro-RNA data in order to determine positive/negative status of GvHD for a patient. The work was done in <b>Python</b> and the algorithms utilized the <b>Keras</b> API.</p>
            <br/>
          </div>
        } images = {<h1><SiPython /> <SiKeras /> </h1>}/>

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>Consulting for Niftitech</h2>
            <p>We were hired on project basis for the company Niftitech, consulting in development in <b>Flutter</b> and <b>Laravel</b>. With a wide array of projects in mobile apps, websites and custom solutions we have aided them in providing high quality experiences to their customers.</p>
            <br/>
          </div>
        } images = {<h1><SiFlutter /> <SiLaravel/></h1>}/>

        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>Crystal Quest: Rainbow and Crystal Quest 2</h2>
            <p>The enormously anticipated sequel of the smash hit Crystal King: Crystal Quest - Rainbow! With the same intense, never ending arcade style gameplay but with 6 more levels, 2 thrilling boss fights and brand new a shop filled with gear to unlock, this adventure will send you to the skies! Available on <b>App Store</b> and <b>Play Store</b>, built in <b>Unity</b> with <b>C#</b> and 3D models created with <b>Blender</b>.</p>
            <br/>
          </div>
        } images = {<h1><BsUnity /> <SiCsharp /> <SiBlender /> <SiAppstore /> <SiGoogleplay /></h1>}/>


        <CardPortfolio textColor="black" width="60%" children={
          <div>
            <h2>Deep Reinforcement Learning in Halite IV</h2>
            <p>For our master thesis at Lund University, LTH at the department of Automatic Control we investigated the field of <b>Deep Reinforcement Learning (DRL)</b>. We built a program capable of setting up and training agents using DRL techniques and testing them in the competitive game environment Halite IV. Our RL agents outperformed some previously created algorithmic agents. Our full results are presented in our master thesis done at LTH and the software was developed in <b>Python</b> and powerful packages including <b>Numpy</b> and <b>Keras</b>.</p>
            <br/>
          </div>
        } images = {<h1><SiPython /> <SiNumpy /> <SiKeras /> </h1>}/>
      </main>
      <Footer/>
    </div>
  );
}

export default PortfolioPage;