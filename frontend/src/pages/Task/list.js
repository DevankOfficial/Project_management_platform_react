import React, { Component } from 'react'
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
} from "react-bootstrap";

import "./ass.css";

const TaskItem = ({ name, project, img, deadline, color }) => {
  return (
    <Card className="task-item p-3 mb-4" style={{ '--top-border-color': color, '--bottom-border-color': color, height: "200px" }}>
      <Row className="g-3 align-items-center">
        <Col xs={3} md={2}>
          <img
            className="img-fluid rounded-circle"
            src={img}
            alt={name}
            style={{ width: '60px', height: '60px' }}
          />
        </Col>
        <Col xs={9} md={10}>
          <h5 className="task-name">{name}</h5>
          <p className="task-project mb-1">Project: {project}</p>
          <small className="task-deadline text-muted">
            <i className="far fa-clock text-primary me-2" />
            Deadline: {deadline}
          </small>
        </Col>
      </Row>
    </Card>
  );
};

const TaskList = ({ tasks = [] }) => {
  const getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33E6', '#33E6FF', '#E6FF33', '#FF336F', '#336FFF', '#6FFF33'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Container style={{padding: "20px"}}>
      <Row className="g-4">
        {tasks.map((task, index) => (
          <Col md={3} key={index}>
            <a href='/task/:id' key={index}>
              <TaskItem
                name={task.name}
                project={task.project}
                img={task.img}
                deadline={task.deadline}
                borderColor={getRandomColor()}
              />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TaskList;