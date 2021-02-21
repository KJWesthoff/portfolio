import React from 'react';




// Props are passed through our functional component.
function ProjectCard(props) {
    const coverImage = props.project.coverPhoto
  
  
  
    return (
      <div
        className="card box-border h-35 w-31 border-4 m-5 flex flex-wrap flex-col"
        key={props.project.id}
      >
        <div className = "text-gray-500 text-1xl font-bold p-3 ">{props.project.name}</div>   
        
        <div className="img-container">
          <img
            key={props.project.id}
            alt={props.project.coverPhoto}
            src={`${props.project.coverPhoto}`}
            width="300"
          />
        </div>
        <div className="content">
            <a href={props.project.url_deployed}>Deployed</a> 
            <a href={props.project.url_gitHub}>GitHub</a> 


        </div>
      </div>
    );
}

export default ProjectCard;