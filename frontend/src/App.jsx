import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

// Pages
import Index from './pages/index';
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Projects from './pages/ProjectPages/projects';
import CreateProjectPage from './pages/ProjectPages/CreateProjectPage';
import ManageProject from './pages/ProjectPages/ManageProjectPage';
import ProjectDetails from './pages/ProjectPages/ProjectDetails';
import Assignments from './pages/Task/assignments';
import Profile from './pages/profile';
import Settings from "./pages/settings";
import NotFound from './pages/notfoud'; // foud 🫤
import ConnectPage from './pages/Connect/ConnectPage';
import Task from './pages/Task/Task';
import ManageTeam from './pages/Connect/ManageTeam';
import Transactions from './pages/Transaction/trans';
import OtherProfilePage from './pages/Connect/OtherProfilePage';


export default class App extends Component {  
  render() {
    return (
      <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path = "/"               element = { <Index/> }              />
            
            <Route path = "/register"       element = { <Register/> }           />
            <Route path = "/login"          element = { <Login/> }              />
            <Route path = "/logout"         element = { <Logout/> }             />

            <Route path = "/dashboard"      element = { <Dashboard/> }          />
            <Route path = "/profile"        element = { <Profile/> }            />

            <Route path = "/settings"       element = { <Settings/> }           />

            <Route path = "/projects"       element = { <Projects/> }           />
            <Route path = "/project/:id"    element = { <ProjectDetails/> }     />
            <Route path = "/create-project" element = { <CreateProjectPage/> }  />
            <Route path = "/manage-project" element = { <ManageProject/> }      />

            <Route path = "/connect"        element = { <ConnectPage/> }        />  
            <Route path = "/manage-team/:id"element = { <ManageTeam/> }         />
            <Route path = "/oprofile/:id"   element = { <OtherProfilePage/> }   />

            <Route path = "/transactions"   element = { <Transactions/> }       />  

            <Route path = "/assignments"    element = { <Assignments/> }        />
            <Route path = "/task/:id"       element = { <Task/> }               />

            <Route path = "*"               element = { <NotFound/> }           />
          </Routes>
        </Router>
      </AuthProvider>
      </>
    );
  }
}