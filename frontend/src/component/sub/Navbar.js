import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useAuth } from '../../context/AuthContext';
import DropdownLink from '../DropDown/dropdownlink';

const about_Options = [
  { label: 'Documents', value: '#Documents' },
  { label: 'Testimonials', value: '#Testimonials' },
  { label: 'F&Qs', value: '#Fnqs' },
  { label: 'Features', value: '/features' },
  { label: 'T&Cs', value: '/tnc' },
];
const assignment_Options = [
  { label: 'Completed', value: 'documents' },
  { label: 'Assigned', value: 'testimon' },
  { label: 'Due', value: 'fnqs' },
  { label: 'All', value: 'fnqs' },
];
const proj_Options = [
  { label: 'Create', value: '/create-project' },
  { label: 'Manage', value: '/manage-project/:id' },
  { label: 'List', value: '/projects' },
];
const trans_Options = [
  { label: 'View', value: '/transactions-view' },
  { label: 'Make', value: '/transactions-make' },
];

const Navbar = () => {
  var { isLoggedIn } = useAuth();

  const handleSelect = (option) => {
    // console.log('Selected option:', option);
    const element = document.getElementById(option.value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  if (!isLoggedIn){
    return (
      <nav className="navbar">
        <div className="nav-link-items">
          <Link to="/projects" className="cool-link">Project List</Link>
          <Link to="/connect" className="cool-link">Connect</Link>
          <Link to="/assignments" className="cool-link">Assignments</Link>
          <Link to="/transactions" className="cool-link">Transactions</Link>
          <Link to="/aboutus" className="cool-link">
            <DropdownLink name="About Us" options={about_Options} onSelect={handleSelect}/> 
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-link-items">
        <Link to="/inbox" className="cool-link">Inbox</Link>
        <Link to="/connect" className="cool-link">Connect</Link>
        <Link to="/projects" className="cool-link">
          <DropdownLink name="Projects" options={proj_Options} onSelect={handleSelect}/>
        </Link>
        <Link to="/tasks" className="cool-link">
          <DropdownLink name="Tasks" options={assignment_Options} onSelect={handleSelect}/> 
        </Link>
        <Link to="/transactions" className="cool-link">
          <DropdownLink name="Transactions" options={trans_Options} onSelect={handleSelect}/> 
        </Link>
      </div>
    </nav>
  );
  

};

export default Navbar;