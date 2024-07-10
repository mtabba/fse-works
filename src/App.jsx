import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import FirstPage1 from './components/FirstPage1'
import AboutUs from './components/AboutUs';
import Local from './components/Services';
import International from './components/International';
import ServiceSection from './components/ServiceSection';


function App() {

  return (
    <>
    <Header/>
    <FirstPage1/>
    <AboutUs/>
    <ServiceSection/>
    <International/>
    <Local/>
    
    </>
  )
}

export default App
