import '../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import { BrowserRouter, Route, Routes, Switch, Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='page'>
      <Header/>
      <main>
        <p>Oh no, the page you were looking for doesn't exist</p>
      </main>
      <Footer/>
    </div>
  );
}


export default NotFoundPage;
