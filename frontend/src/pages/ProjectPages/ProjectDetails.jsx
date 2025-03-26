import React, { Component, useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
  ListGroup
} from "react-bootstrap";
import BasePage from '../Base';

import './style/projectdetails.css';

const p = {
  id: 1,
  title: 'Sample Project',
  creator: 'John Doe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum erat odio, et pretium lorem interdum sed.',
  budget: '1000',
  status: 'In Progress',
  collaborators: ['Jane Smith', 'Alice Johnson'],
  creatorId: 'user123',
  tags: ['Web Development', 'React', 'JavaScript'],
  type: 'Web Application',
  framework: 'React',
  language: 'JavaScript',
  skillsRequired: ['Frontend Development', 'UI/UX Design'],
  expertise: 'Intermediate',
  duration: '2 months',
  image: './style/poj.jpg',
  progress: 69, // Example progress value
}

export default class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: p,
      userId: null,
      userName: null,
      roles: null,
    };
  }

  // componentDidMount() {
  //   const { userId, userName, roles } = this.context; 
  //   this.setState({ userId, userName, roles });
  // }

  handleJoinProject = () => {
    console.log('Joining project:', this.state.project.title);
  };

  handleEditProject = () => {
    console.log('Editing project:', this.state.project.title);
  };

  handleDeleteProject = () => {
    console.log('Deleting project:', this.state.project.title);
  };

  handleEditProject = () => {
    console.log('editing');
  }

  handleManageProject = () => {
    console.log('managing');
  }
  handleDeleteProject = () => {
    console.log('deleting');
  }

  render() {
    const { project } = this.state;
    const { isLoggedIn } = true;
    const isCreator = true;
    // isLoggedIn && this.state.userId === project.creatorId;
    const isCollaborator = false;
    // isLoggedIn && project.collaborators.includes(this.state.userName);

    return (
      <BasePage toggleHeader={true} toggleSidebar={true} toggleFooter={false}>
        <>
          <Container className="py-5">
            <Row>
              <Col lg="4">
                <Card className="mb-4">
                  <Card.Body className="text-center">
                    <Card.Img
                      src="./style/crea.jpg"
                      alt="img"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid="true"
                    />
                    <h2 className="text-muted mb-1"><strong>{project.title}</strong></h2>
                    <p className="text-muted mb-1">{project.creator}</p>
                    <hr />
                    <p className="text-muted mb-4">
                      {project.collaborators.map((c, index) => (
                        <span key={index}>{c} </span>
                      ))}
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      {isCreator &&
                        <>
                          <a href="#" className="btn btn-primary me-2">Edit</a>
                          <a href="/manage-team/:id" className="btn btn-primary me-2">Manage</a>
                          <a href="#" className="btn btn-danger">Delete</a>
                        </>
                      }
                      {isCollaborator &&
                        <>
                          <a href="#" className="btn btn-primary me-2">Manage</a>
                          <a href="#" className="btn btn-secondary">Contact</a>
                        </>
                      }
                      {!isCollaborator && !isCreator &&
                        <>
                          <a href="#" className="btn btn-primary me-2">Manage</a>
                          <a href="#" className="btn btn-secondary">Contact</a>
                        </>
                      }
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-4 mb-lg-0">
                  <Card.Body className="p-0">
                    <ListGroup variant="flush" className="rounded-3">
                      <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <Card.Text>https://projectA.com</Card.Text>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                        <Card.Text>projectA</Card.Text>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                        <Card.Text>@projectA</Card.Text>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                        <Card.Text>projectA</Card.Text>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-facebook fa-lg" style={{ color: '#3b5998' }}></i>
                        <Card.Text>projectA</Card.Text>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="8">
                <Card className="mb-4">
                  <Card.Body>
                    <Row>
                      <Col sm="3">
                        <Card.Text>Description</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">{project.description}</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Budget</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">{project.budget}</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Duration</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">{project.duration}</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Expertise</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">{project.expertise}</Card.Text>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm="3">
                        <Card.Text>Type</Card.Text>
                      </Col>
                      <Col sm="9">
                        <Card.Text className="text-muted">{project.type}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <Row>
                  <Col md="6">
                    <Card className="mb-4 mb-md-0">
                      <Card.Body>
                        <Card.Text className="mb-4"><span className="text-primary font-italic me-1">Progress</span> Project Status</Card.Text>
                        <Card.Text className="mb-1" style={{ fontSize: '.77rem' }}>UI Design</Card.Text>
                        <ProgressBar now={80} className="rounded" />

                        <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Front-end</Card.Text>
                        <ProgressBar now={72} className="rounded" />

                        <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Back-end</Card.Text>
                        <ProgressBar now={89} className="rounded" />

                        <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>UX & Research</Card.Text>
                        <ProgressBar now={55} className="rounded" />

                        <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Overall</Card.Text>
                        <ProgressBar now={66} className="rounded" />
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md="6">
                    <Card className="mb-4 mb-md-0">
                      <Card.Body>
                        <Card.Text className="mb-1" style={{ fontSize: '.77rem' }}>Tags</Card.Text>
                        {project.tags.map((t, key) => (
                          <div className="tag" key={key}>{t}</div>
                        ))}

                        <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Framework</Card.Text>
                        <div className="tag">{project.framework}</div>

                        <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Languages</Card.Text>
                        <div className="tag">{project.language}</div>

                        <Card.Text className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Skills Required</Card.Text>
                        {project.skillsRequired.map((s, key) => (
                          <div className="tag" key={key}>{s}</div>
                        ))}

                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      </BasePage>
    );
  }
}