import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import Navbar from '../sub/Navbar';
import './header.css'

import { useAuth } from '../../context/AuthContext';

const Header = () => {
  var {isLoggedIn, login, logout} = useAuth();
  const [userProfilePic, setUserProfilePic] = useState('/Subtract.png'); 

  const handleLoginClick = () => {
    isLoggedIn = !isLoggedIn;
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        {/* <img src="/Subtract.png" alt="Website Logo" />  */}
        ProjectShala
      </Link>
      <div className="nav-right">
        <Navbar/>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
          <Button variant="outline-success">Search</Button>
        </Form>

        <div style={{padding: 10,}}>
          {isLoggedIn ? (
            <Link to="/profile">
              <img src={userProfilePic} alt="Profile" className="profile-pic" />
            </Link>
          ) : (
            <Link to="/login">
              <button onClick={handleLoginClick} className="login-button">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );

}

export default Header;