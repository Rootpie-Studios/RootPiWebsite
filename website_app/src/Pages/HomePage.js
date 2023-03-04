import React from 'react';
import { BrowserRouter, Route, Routes, Switch, Link } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <div className='page'>
      <Header/>
      <main>
        <p>HomePage</p>
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage;