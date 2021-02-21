import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <footer className="flex align-center pt-4 justify-center text-4xl text-white bg-gray-500 shadow-lg h-20 mb-auto b-screen">
      <div className="flex ml-5 ">
        <div>
          <a className="ml-5" href="https://github.com/KJWesthoff">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="ml-5"
            href="https://www.linkedin.com/in/karl-johan-westhoff-36460011/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;
