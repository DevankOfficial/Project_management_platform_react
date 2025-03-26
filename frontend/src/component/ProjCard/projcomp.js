import React, {useState} from 'react';
import ProjectCard from './projectcard';
import './projcomp.css'

import { IconButton } from "@mui/material";
import ActiveIcon from "@mui/icons-material/FiberManualRecordRounded";
import NotActiveIcon from "@mui/icons-material/FiberManualRecordOutlined";
import LeftIcon from "@mui/icons-material/ChevronLeftRounded";
import RightIcon from "@mui/icons-material/ChevronRightRounded";

const projects = [
  { id: 1, title: 'Project 1', managerName:"Mr.XYZ", description: 'Description of Project 1', startDate: '2024-01-01', endDate: '2024-12-31', img: '/poj.jpg' },
  { id: 2, title: 'Project 2', managerName:"Mr.XYZ", description: 'Description of Project 2', startDate: '2024-02-01', endDate: '2024-11-30', img: '/poj.jpg'  },
  { id: 3, title: 'Project 3', managerName:"Mr.XYZ", description: 'Description of Project 3', startDate: '2024-03-01', endDate: '2024-10-31', img: '/poj.jpg'  },
  { id: 4, title: 'Project 4', managerName:"Mr.XYZ", description: 'Description of Project 4', startDate: '2024-02-01', endDate: '2024-11-30', img: '/poj.jpg'  },
  { id: 5, title: 'Project 5', managerName:"Mr.XYZ", description: 'Description of Project 5', startDate: '2024-03-01', endDate: '2024-10-31', img: '/poj.jpg'  },
  { id: 6, title: 'Project 6', managerName:"Mr.XYZ", description: 'Description of Project 6', startDate: '2024-02-01', endDate: '2024-11-30', img: '/poj.jpg'  },
  { id: 7, title: 'Project 7', managerName:"Mr.XYZ", description: 'Description of Project 7', startDate: '2024-03-01', endDate: '2024-10-31', img: '/poj.jpg'  },
];

const ProjectComp = ({ name }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of projects per page
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const maxPageNumbersToShow = 5; 

  const startIndex = currentPage * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxPageNumbersToShow / 2);
    let start = Math.max(0, currentPage - half);
    let end = Math.min(totalPages, start + maxPageNumbersToShow);

    if (end - start < maxPageNumbersToShow) {
      start = Math.max(0, end - maxPageNumbersToShow);
    }

    for (let i = start; i < end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="projects">
      <h3> {name} </h3>
      <div className="projects__list">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="projects__pagination">
        <IconButton onClick={handlePreviousPage} disabled={currentPage === 0}>
          <LeftIcon />
        </IconButton>
        {getPageNumbers().map((pageNumber) => (
          <IconButton key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
            {currentPage === pageNumber ? (
              <ActiveIcon style={{ height: "25px", width: "25px" }} />
            ) : (
              <NotActiveIcon />
            )}
          </IconButton>
        ))}
        <IconButton onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          <RightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProjectComp;
