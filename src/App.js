
import React, { useState} from 'react';

import Header from './components/Header/Header.js' 
import Footer from './components/Footer/Footer.js'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'

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
  
  const renderPage = () => {
    switch (currentCategory.name) {
      case 'about':
        return <About />;
      case 'projects':
        return <Portfolio />;
      case 'resume':
          return <Resume />;
      case 'contact':
          return <Contact />;
      default:
        return <About />;
    }
  };

  
  return (
    <>
   <div className= "flex flex-col h-screen">
     <header>
     <Header
      // props to be drilled down to Nav
      aboutSelected = {aboutSelected}
      setAboutSelected = {setAboutSelected}
      currentCategory = {currentCategory}
      setCurrentCategory = {setCurrentCategory}
      categories = {categories}
      />
      </header>
     
     
     
      <content className = "flex flex-grow justify-center">
        {renderPage(currentCategory)}
      </content>
     
      <footer>
        <Footer/>
      </footer>
   </div>
    </>

    
  );
}

export default App;
