import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

// destructure categories from App
function Nav({ setCurrentCategory, currentCategory, categories }) {
  const [menuHidden, setMenuHidden] = useState(true);

  function toggleMenu() {
    setMenuHidden(!menuHidden);
    console.log(menuHidden);
  }

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <div className="">
      <nav className={`flex flex-wrap items-center justify-between p-5`}>
        <div className="sm:hidden text-white text-xl">
          <p onClick={toggleMenu} className="">
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>

        <div
          className={`sm:flex sm:items-center sm:w-auto w-full z-0 ${
            menuHidden && "hidden"
          }`}
        >
          <div className={`rounded ${!menuHidden && "bg-gray-600 shadow-lg"}`}>
            <ul className={`text-gray-400 sm:self-center text-xl border-none}`}>
              {categories.map((category) => (
                <li      onClick={() => {
                  setCurrentCategory(category);
                }}
                  className={`sm:inline-block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    currentCategory.name === category.name && "text-white"
                  }`}
                  key={category.name}
                >
                  <span
               
                  >
                    {capitalizeFirstLetter(category.name)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
