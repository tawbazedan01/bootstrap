import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Portfolio from './components/Portfolio'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import { Route, Routes } from 'react-router-dom';




export default function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  
  )
}
