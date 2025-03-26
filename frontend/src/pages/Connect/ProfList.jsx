import React, { useState } from 'react';
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

import './css/conn.css';
import './css/team.css';

const ProfileItem = (name, profession, img, location, wages, times, exp) => {
  return (
    <Card className="job-item p-4 mb-4">
      <Row className="g-4">
        <Col sm={12} md={8} className="d-flex align-items-center">
          <img
            className="flex-shrink-0 img-fluid border rounded"
            src={img}
            alt=""
            style={{ width: '80px', height: '80px' }}
          />
          <div className="text-start ps-4">
            <h4 className="job-name">{name}</h4>
            <h5 className="mb-3 job-profession">{profession}</h5>
            <span className="text-truncate me-3 job-location">
              <i className="fa fa-map-marker-alt text-primary me-2"></i>
              {location}
            </span>
            <span className="text-truncate me-3 job-times">
              <i className="far fa-clock text-primary me-2"></i>
              {times}
            </span>
            <span className="text-truncate me-0 job-wages">
              <i className="far fa-money-bill-alt text-primary me-2"></i>
              {wages}
            </span>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-flex flex-column align-items-start align-items-md-end justify-content-center">
          <div className="d-flex mb-3">
            <Button variant="light" className="btn-square me-3">
              <i className="far fa-heart text-primary"></i>
            </Button>
            <Button variant="primary">Connect</Button>
          </div>
          <small className="text-truncate job-experience">
            <i className="far fa-calendar-alt text-primary me-2"></i>
            Experience: {exp}
          </small>
        </Col>
      </Row>
    </Card>
  )
}

const ProfileList = ({ profiles = [] }) => {
  return (
    <Container>
      <Row className="g-4">
        {profiles.map((profile, index) => (
          <Col md={6} key={index}>
            {ProfileItem(
              profile.name,
              profile.profession,
              profile.img,
              profile.location,
              profile.wages,
              profile.times,
              profile.exp
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export {ProfileItem , ProfileList};