import React from "react";
import Nav from "../Nav/Nav"


function Header(props) {



    return(
        <header className="flex items-center bg-gray-500 shadow-lg h-20">
      
        
        

        <div className="justify-start flex items-center">
          <a href="#" className="text-white text-3xl font-bold p-3">
            Portfolio
          </a>

          <p id="hamburgerbtn" className="md:hidden bg-gray-800">
            menu
          </p>
        </div>
       
        <Nav {...props} 
        ></Nav>

        </header>
)}


export default Header;