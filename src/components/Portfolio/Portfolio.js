import React from "react";
import ProjectList from "../../assets/projectList.json";
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";


function Portfolio() {
  // Get projects from github
  

  return (
    <Wrapper>
      <div className="flex justify-center">
        <p className=" text-gray-500 text-3xl font-bold p-3">Projects</p>
      </div>

      <div className="flex flex-wrap justify-center">
        {ProjectList.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </Wrapper>
  );
}

export default Portfolio;
