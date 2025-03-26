import React, { useState} from "react";

const ProfessionCard = ({ profession, icon, available, onClick, delay }) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = (e) => {
      e.preventDefault();
      setIsActive(!isActive);
      onClick(profession);
    };
  
    return (
      <a
          className={`rounded p-4 col-lg-3 col-sm-6 ${isActive ? 'active' : ''}`}
          href=""
          onClick={handleClick}
        >
      <div className={`cat-item wow fadeInUp`} data-wow-delay={delay}>
        
          <i className={`fa fa-3x ${icon} text-primary mb-4`}></i>
          <h6 className="mb-3">{profession}</h6>
          <p className="mb-0">{available} Available</p>
        
      </div>
      </a>
    );
  };
  
  const ProfessionList = ({ professions, handleProfessionSelect }) => {
    return (
      <div className="row g-4">
        {professions.map((prof, index) => (
          <ProfessionCard
            key={prof.name}
            profession={prof.name}
            icon={prof.icon}
            available={prof.available}
            delay={`${0.1 * (index % 4)}s`}
            onClick={handleProfessionSelect}
          />
        ))}
      </div>
    );
  };

export default ProfessionList;