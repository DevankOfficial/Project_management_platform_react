import React, { Component } from 'react';
import { Button, Image, Card, Form, Table, Row, Col, CardFooter } from 'react-bootstrap';
import ProjCard from './card';

import './style/projects.css';

import TITLE from "../../info/title";
import SideNavbar from '../helper/sidenavbar';
import Footer from '../../component/Footer/footer';
import profile_avatar from "../images/logo.png";

const Page_TITLE = TITLE + " - Projects";
const username = "Vignesh Goswami";
const profileimage = profile_avatar;

const p1 = {
  name: "Comprehensive Project Management Platform",
  desc: "Develop a web-based platform to efficiently manage projects and team collaborations. It includes user registration, login, a comprehensive dashboard, chat/inbox functionality, project management, assignment tracking, and transaction monitoring.",
  img: profile_avatar,
  objs: [
    "Provide an intuitive user interface for project and assignment management.",
    "Ensure secure and efficient user registration and login processes.",
    "Facilitate team collaboration through chat and notifications.",
    "Streamline project management from assignment allocation to completion.",
    "Offer detailed tracking and reporting of transactions related to projects and assignments.",
  ],
  last: 3,
}
const ps = [p1, p1, p1, p1, p1];



export default class Projects extends Component {
  componentDidMount() {
    document.title = Page_TITLE;
  }

  render() {
    return (
      <>
        <SideNavbar username={username} profileimage={profileimage}>
          {/* <TopNavbar /> */}
          <div className='projects-container'>
            <Row>
              <Col className="mt-3">
                <Card className='h-20'>
                  <Card.Header>
                    Search
                  </Card.Header>
                </Card>
              </Col>
            </Row>
            {ps && Array.isArray(ps) && ps.length > 0 ? (
              ps.map((p, key) => (
                <React.Fragment key={key}>
                  <ProjCard p={p} />
                  <br />
                </React.Fragment>
              ))
            ) : (
              <p>No projects available.</p>
            )}

            <br />
          </div>
          <br />
          <Footer />
        </SideNavbar>
      </>
    );
  }
}