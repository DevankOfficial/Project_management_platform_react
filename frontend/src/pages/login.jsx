import React, { Component } from 'react';
import axios from "axios";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import './css/login.css';

import csrftoken from "./helper/crsf";

import profile_avatar from "./images/profile_avatar.png";
import BasePage from './Base';


const TITLE = "DragonEyeX - Login";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  componentDidMount() {
    document.title = TITLE;
  }

  handleBack = () => {
    window.location.href = '/';
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    axios
      .post(
        "/api/login/login/",
        { username, password },
        { headers: { 'X-CSRFToken': csrftoken } }
      )
      .then((response) => {
        if (response.data.success) {
          window.location.href = '/dashboard';
        } else {
          this.setState({ error: response.data.message });
        }
      })
      .catch((error) => {
        console.log("Login Failed. Error: " + error);
      });
  }

  render() {
    const { username, password, error } = this.state;

    return (
      <BasePage>
        <div className="login-page">
          <Container>
            <Row>
              <Col lg={10} className="offset-lg-1">
                <h2 className="mb-3"><b>Login Now</b></h2>
                <div className="shadow rounded" style={{ backgroundColor: "#fff" }}>
                  <Row>
                    <Col md={7} className="pe-0">
                      <div className="form-left h-100 py-5 px-5">
                        <Form onSubmit={this.handleSubmit} className="row g-4">
                          <Col md={12}>
                            <label>Username<span className="text-danger">*</span></label>
                            <div className="input-group">
                              <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                              />
                            </div>
                          </Col>

                          <Col md={12}>
                            <label>Password<span className="text-danger">*</span></label>
                            <div className="input-group">
                              <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                              />
                            </div>
                          </Col>

                          <Col sm={6}>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                              <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                            </div>
                          </Col>

                          <Col sm={6}>
                            <a href="/forgot" className="float-end text-primary">Forgot Password?</a>
                          </Col>

                          <Col md={12}>
                            <Button type="button" onClick={this.handleBack} className="btn btn-primary px-4 mt-4">Back</Button>
                            <Button type="submit" className="btn btn-primary px-4 float-end mt-4">Login</Button>
                          </Col>
                        </Form>
                      </div>
                    </Col>
                    <Col md={5} className="ps-0 d-none d-md-block">
                      <div className="form-right h-100 bg-primary text-white text-center pt-5">
                        <h2 className="fs-1">Welcome Back!!!</h2>
                        {/* <img src={profile_avatar} style={{ objectFit: 'contain' }} alt="Profile Avatar" /> */}
                        <br /> <br /><br /><br /><br /> <br /><br /><br />
                        <Row className="align-items-center">
                          <Col>
                            <span>New to the site?</span>
                          </Col>
                          <Col>
                            <a href='/register'>
                            <u style={{color: "#fff"}}>Try Registering</u>
                            </a>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
                <p className="text-end text-secondary mt-3">By Vignesh Goswami</p>
                <p className="text-end text-secondary mt-3">@{new Date().getFullYear()}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    );
  }
}
