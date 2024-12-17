import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Portfolio from './components/Portfolio'; 
import About from './components/About'; 
import Contact from './components/Contact'; 




export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
