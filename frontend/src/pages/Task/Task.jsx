import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import i1 from "../images/image01.jpg";
import BasePage from "../Base";

import "./task.css";

export default class Task extends Component {
  handleMarkAsDone = () => {
    alert('Task marked as done!');
  };

  handleDigitalSubmission = (e) => {
    e.preventDefault();
    alert('Digital submission received!');
  };

  render() {
    const task = {
      name: "X", project: "Alpha", img: i1, 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae tortor nisi. Nunc et accumsan eros. Fusce pellentesque iaculis vestibulum. Vestibulum molestie, elit in congue feugiat, enim ex tristique est, ac aliquam ipsum lectus quis neque.", 
      deadline: "23.03.2025"
    };

    return (
      <BasePage toggleFooter={false} toggleHeader={true} toggleSidebar={true}>
        <Container fluid className="py-5">
        <Row className="h-100">
            <Col md={{ span: 8, offset: 2 }} className="h-100 d-flex flex-column">
              <Card className="mb-4 flex-grow-1">
                <Card.Body>
                  <Row className="mb-3">
                    <Col xs={3} className="text-center">
                      <img
                        src={task.img}
                        alt={task.name}
                        className="rounded-circle"
                        style={{ width: '100px', height: '100px' }}
                        fluid="true"
                      />
                    </Col>
                    <Col xs={9}>
                      <h2 className="mb-1">Task: {task.name}</h2>
                      <p className="text-muted mb-1">Project: {task.project}</p>
                      <p className="text-muted">
                        <i className="far fa-clock text-primary me-2" />
                        Deadline: {task.deadline}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Description</h5>
                      <p>{task.description}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card className="mt-4 flex-grow-1">
                <Card.Body>
                  <h5>Submit Digital Work</h5>
                  <Form onSubmit={this.handleDigitalSubmission}>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Upload your work</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="me-2">
                      Submit
                    </Button>
                    <Button
                      variant="success"
                      onClick={this.handleMarkAsDone}
                    >
                      Mark as Done
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </BasePage>
    );
  }
}