import React, { useEffect } from 'react';
import {capitalizeFirstLetter} from "../../utils/helpers"

// destructure categories from App
function Nav(
  {setCurrentCategory,
  currentCategory,
  aboutSelected,
  setAboutSelected,
  categories}) {
  
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (

  <nav className="flex md:flex md:flex-row">
    
    <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none" id="mobileMenu">
      {categories.map((category) => (
        <li
          className={`sm:inline-block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            currentCategory.name === category.name &&
            !aboutSelected &&
            "navActive"
          }`}
          key={category.name}
        >
          <span
            onClick={() => {
              setCurrentCategory(category);
              if(category.name === 'about'){
              setAboutSelected(true);
              } else {
                setAboutSelected(false);
              }
            }}
          >
            {capitalizeFirstLetter(category.name)}
          </span>
        </li>
      ))}
    </ul>
  </nav>


      
    
  );
}

export default Nav;