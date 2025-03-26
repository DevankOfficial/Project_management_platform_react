import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const ProjectCard = ({ key, project, disableLink }) => {
  const navi = useNavigate();

  const handleClick = () => {
    if (disableLink){
      return null;
    }
    navi(`/project/${key}`);
  };
 
  return (
    <div className="project-card" onClick={(handleClick)}
      style={{
        background: "#0056b3",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      <h3 className="project-card__title" 
      // style={{ backgroundImage: `url(${project.img})` }}
      >
        {project.title}
      </h3>
      <h4 className='project-card__manager'> {project.managerName}</h4>
      <div className="project-card__description">{project.description}</div>
      <div className="project-card__details">
        <span>Duration: {project.startDate} to {project.endDate}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
