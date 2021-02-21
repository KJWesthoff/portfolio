import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBootstrap,
  faCss3,
  faCss3Alt,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faNodeJs,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFileDownload,
  faFileCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import myResume from '../../assets/misc/ResumeKJ.pdf';

const Resume = () => {
  return (
    <div className="flex align-center flex-col">
      <div className="Heading flex flex-row">
        <p className=" text-gray-500 text-3xl font-bold p-3">Resume</p>
        <p
          onClick={() => {
            console.log("PrintClicked");
          }}
          className=" text-gray-500 text-3xl font-bold p-3"
        >
          {" "}
          <a href={myResume}>
              <FontAwesomeIcon icon={faFileDownload} />
          </a>
        </p>
      </div>

      <div className="p-3">
        <div className="Heading text-gray-500">
          <p className=" text-gray-500 text-1xl font-bold pt-3">
            Front End <FontAwesomeIcon icon={faHtml5} />
          </p>
          <ul className="ml-5">
            <li>
              HTML <FontAwesomeIcon icon={faFileCode} />
            </li>
            <li>
              CSS <FontAwesomeIcon icon={faCss3} />
            </li>
            <li>
              javaScript <FontAwesomeIcon icon={faJs} />
            </li>
            <li>
              Bootstrap <FontAwesomeIcon icon={faBootstrap} />
            </li>
            <li>Tailwind </li>
            <li>
              React <FontAwesomeIcon icon={faReact} />
            </li>
            <li>jQuery</li>
            <li>Handlebars</li>
          </ul>
        </div>

        <div className="Heading text-gray-500">
          <p className=" text-gray-500 text-1xl font-bold pt-3">
            Databases <FontAwesomeIcon icon={faDatabase} />
          </p>
          <ul className="ml-5">
            <li>MySQL</li>
            <li>SQLite</li>
            <li>MongoDB </li>
            <li>Sequelize </li>
            <li>Mongoose </li>
            <li>JawsDB </li>
          </ul>
        </div>

        <div className="Heading text-gray-500">
          <p className=" text-gray-500 text-1xl font-bold pt-3">
            Backend <FontAwesomeIcon icon={faServer} />
          </p>
          <ul className="ml-5">
            <li>
              Node <FontAwesomeIcon icon={faNodeJs} />
            </li>
            <li>Express</li>
            <li>
              NPM <FontAwesomeIcon icon={faNpm} />
            </li>
            <li>MVC </li>
          </ul>
        </div>
        <div className="Heading text-gray-500">
          <p className=" text-gray-500 text-1xl font-bold pt-3">Ancillaries</p>
          <ul className="ml-5">
            <ul>
              Git <FontAwesomeIcon icon={faGit} />
            </ul>
            <ul>
              Github <FontAwesomeIcon icon={faGithub} />
            </ul>
            <ul>Heroku </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
