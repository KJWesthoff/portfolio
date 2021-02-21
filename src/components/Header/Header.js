import React from "react";
import Nav from "../Nav/Nav"


function Header(props) {
    console.log(props.aboutSelected)


    return(
        <header className="flex bg-gray-500 shadow-lg h-20">

        <div className="justify-start flex items-center">
          <a href="#" className="text-white text-3xl font-bold p-3">
            Karl-Johan {props.aboutSelected}
          </a>


        </div>
       
        <Nav {...props} 
        ></Nav>

        </header>
)}


export default Header;