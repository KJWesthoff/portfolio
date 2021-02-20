
import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header.js' 
import Nav from './components/Nav/Nav.js';
import About from './components/About/About'

import './App.css';




function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {name: "about", description: "Brief about me" },
    {name: "portfolio", description:"A selection of software development projects i have made"},
    {name: "resume", description: "my cv" },
    {name: "contact", description: "How i can be reached" }
  
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <>
   <Header 
    // props to be drilled down to Nav
    contactSelected = {contactSelected}
    setContactSelected = {setContactSelected}
    currentCategory = {currentCategory}
    setCurrentCategory = {setCurrentCategory}
    categories = {categories}
    />
    
    <About />
    </>

  );
}

export default App;
