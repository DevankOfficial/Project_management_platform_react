import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Divider } from "react-bootstrap";
import ProfileList from "./ProfList";
import './css/oprof.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import homeDecor1 from "./img/home-decor-1.jpg";
import homeDecor2 from "./img/home-decor-2.jpg";
import homeDecor3 from "./img/home-decor-3.jpg";
import homeDecor4 from "./img/home-decor-4.jpeg";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";

import { oprofiles } from "./info";
import BasePage from "../Base";
import OprofileList from "./OprofList";

const ProfileInfoCard = ({ title, description, info, social, action }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <ul>
        <li><strong>Full Name: </strong>{info.fullName}</li>
        <li><strong>Mobile: </strong>{info.mobile}</li>
        <li><strong>Email: </strong>{info.email}</li>
        <li><strong>Location: </strong>{info.location}</li>
      </ul>
      <div>
        {social.map((s, index) => (
          <a key={index} href={s.link} className={`btn btn-${s.color} btn-icon`}>
            {s.icon}
          </a>
        ))}
      </div>
      <Button href={action.route} variant="secondary">{action.tooltip}</Button>
    </Card.Body>
  </Card>
);

const DefaultProjectCard = ({ image, label, title, description, action, authors }) => (
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">{label}</Card.Subtitle>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button href={action.route} variant={action.color}>{action.label}</Button>
    </Card.Body>
    <Card.Footer>
      <div className="authors">
        {authors.map((author, index) => (
          <img key={index} src={author.image} alt={author.name} className="author-image" />
        ))}
      </div>
    </Card.Footer>
  </Card>
);

export default class OtherProfilePage extends Component {
  render() {
    return (
      <BasePage toggleFooter={false} toggleHeader={true} toggleSidebar={true}>
        <Container className="py-5">
          <Row className="mb-3">
            <Col xs={12} md={6} xl={4} className="d-flex">
              {/* <Divider orientation="vertical" className="mx-2" /> */}
              <ProfileInfoCard
                title="Profile Information"
                description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                  fullName: "Alec M. Thompson",
                  mobile: "(44) 123 1234 123",
                  email: "alecthompson@mail.com",
                  location: "USA",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              {/* <Divider orientation="vertical" className="mx-2" /> */}
            </Col>
            {/* <Col xs={12} xl={4}>
              <OprofileList profiles={oprofiles} />
            </Col> */}
          </Row>
          <div className="pt-2 px-2">
            <h6 className="font-weight-medium">Projects</h6>
            <div className="mb-1">
              <small className="text-muted">Architects design houses</small>
            </div>
          </div>
          <div className="p-2">
            <Row className="gy-4">
              <Col xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="Project #2"
                  title="Modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/project/:id",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Col>
              <Col xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="Project #1"
                  title="Scandinavian"
                  description="Music is something that everyone has their own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/project/:id",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Col>
              <Col xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="Project #3"
                  title="Minimalist"
                  description="Different people have different tastes, and various types of music."
                  action={{
                    type: "internal",
                    route: "/project/:id",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Col>
              <Col xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor4}
                  label="Project #4"
                  title="Gothic"
                  description="Why would anyone pick blue over pink? Pink is obviously a better color."
                  action={{
                    type: "internal",
                    route: "/project/:id",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </BasePage>
    );
  }
}  