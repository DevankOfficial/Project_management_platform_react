import React, { useState } from 'react';
import './dropdown.css'

const DropdownLink = ({ name, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown-header">
        {name}
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
              <li key={option.value} className="dropdown-item" onClick={() => handleOptionClick(option)}>
              
                {option.label}
              
              </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownLink;