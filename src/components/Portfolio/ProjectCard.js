import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Props are passed through our functional component.
function ProjectCard(props) {
  const coverImage = props.project.coverPhoto;

  return (
    <div
      className="card box-border h-35 w-31 border-4 m-5 flex flex-wrap flex-col"
      key={props.project.id}
    >
      <div className="text-gray-500 text-2xl font-bold p-3 ">
        {props.project.name}
      </div>

      <div className="img-container">
        <img
          key={props.project.id}
          alt={props.project.coverPhoto}
          src={`${props.project.coverPhoto}`}
          width="300"
        />
      </div>
      <div className="content flex flex-col text-gray-500 text-sm ml-2">
        <a href={props.project.url_deployed}>
          <FontAwesomeIcon icon={faGlobeEurope} /> <span className="text-xs">{props.project.url_deployed}</span>
        </a>
        <a href={props.project.url_gitHub}>
          <FontAwesomeIcon icon={faGithub} />  <span className="text-xs">{props.project.url_gitHub}</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
