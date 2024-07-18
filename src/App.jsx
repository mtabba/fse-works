import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import FirstPage1 from './components/FirstPage1';
import AboutUs from './components/AboutUs';
import Local from './components/Local';
import International from './components/International';
import ServiceSection from './components/ServiceSection';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <FirstPage1 />
            <AboutUs />
            <ServiceSection />
            <International />
            <Local />
            <Projects />
            <Testimonials />
            <ContactUs />
            <Footer />
        </>
    );
}

export default App;
