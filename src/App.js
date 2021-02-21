
import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/Header.js' 
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'


import './App.css';




function App() {
  const [aboutSelected, setAboutSelected] = useState(true);

  const [categories] = useState([
    {name: "about", description: "Brief about me" },
    {name: "projects", description:"A selection of software development projects i have made"},
    {name: "resume", description: "my cv" },
    {name: "contact", description: "How i can be reached" }
  
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <>
   <Header 
    // props to be drilled down to Nav
    aboutSelected = {aboutSelected}
    setAboutSelected = {setAboutSelected}
    currentCategory = {currentCategory}
    setCurrentCategory = {setCurrentCategory}
    categories = {categories}
    />
    
    {aboutSelected &&  <About /> }
   
    <Portfolio></Portfolio>

    </>

    
  );
}

export default App;
