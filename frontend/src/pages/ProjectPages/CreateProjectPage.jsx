import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from "axios";
import csrftoken from "../helper/crsf";
import BasePage from '../Base';
import './style/crea.css';

import profile_avatar from "./style/crea.jpg";
import countryOptions from "../../info/country";

const TITLE = "ProjectShala"

export default class CreateProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        firstname: "",
        lastname: "",
        dob: "",
        gender: "",
        email: "",
        address1: "",
        address2: "",
        state: "",
        city: "",
        pincode: "",
        country: "",
        error: ""
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend API for storage
    // Reset form after submission
    this.setState({
      formData: {
        title: '',
        description: '',
        img: '',
        budget: '',
        provisionalCollaborators: [],
        finalCollaborators: [],
        startDate: '',
        endDate: '',
        tags: [],
        status: 'active',
      },
    });
  };

  componentDidMount() {
    document.title = TITLE;
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    document.querySelector('.step-1').style.display = 'block';
  }

  handleSubmitPage1 = (event) => {
    event.preventDefault();
    const { firstname, lastname, dob, gender, email } = this.state;

    axios
      .post(
        "/api/register/registerpage1/",
        { firstname, lastname, dob, gender, email },
        { headers: { 'X-CSRFToken': csrftoken } }
      )
      .then((response) => {
        if (response.data.success) {
          this.handleNextStep()
        } else {
          this.setState({ error: response.data.message });
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.log("Registration Failed. Error: " + error);
      });
  };

  handleSubmitPage2 = (event) => {
    event.preventDefault();
    const { address1, address2, state, city, pincode, country } = this.state;

    axios
      .post(
        "/api/register/registerpage2/",
        { address1, address2, state, city, pincode, country },
        { headers: { 'X-CSRFToken': csrftoken } }
      )
      .then((response) => {
        if (response.data.success) {
          this.handleNextStep()
        } else {
          this.setState({ error: response.data.message });
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.log("Registration Failed. Error: " + error);
      });
  };

  handleGetOTP = (event) => {
    event.preventDefault();
    const { mobile1, mobile2 } = this.state;

    axios
      .post(
        "/api/register/registergetotp/",
        { mobile1, mobile2 },
        { headers: { 'X-CSRFToken': csrftoken } }
      )
      .then((response) => {
        if (response.data.success) {
          console.log("OTP send successfully.")
        } else {
          this.setState({ error: response.data.message });
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.log("Registration Failed. Error: " + error);
      });
  };

  handleSubmitPage3 = (event) => {
    event.preventDefault();
    const { mobile1, mobile2, otp } = this.state;

    axios
      .post(
        "/api/register/registerpage3/",
        { mobile1, mobile2, otp },
        { headers: { 'X-CSRFToken': csrftoken } }
      )
      .then((response) => {
        if (response.data.success) {
          this.handleNextStep()
        } else {
          this.setState({ error: response.data.message });
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.log("Registration Failed. Error: " + error);
      });
  };

  handleSubmitPage4 = (event) => {
    event.preventDefault();

    axios
      .post(
        "/api/register/registerpage4/",
        {},
        { headers: { 'X-CSRFToken': csrftoken } }
      )
      .then((response) => {
        if (response.data.success) {
          window.location.href = '/login';
        } else {
          this.setState({ error: response.data.message });
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.log("Registration Failed. Error: " + error);
      });
  };

  state = {
    currentStep: 1,
    recaptchaValue: null
  };

  displayStep = (stepNumber) => {
    const { currentStep } = this.state;

    if (stepNumber >= 1 && stepNumber <= 3) {
      document.querySelectorAll(".step-" + currentStep).forEach(step => {
        step.style.display = 'none';
      });
      document.querySelectorAll(".step-" + stepNumber).forEach(step => {
        step.style.display = 'block';
      });
      this.setState({ currentStep: stepNumber });
      this.updateProgressBar(stepNumber);
    }
  };

  updateProgressBar = (stepNumber) => {
    const progressPercentage = ((stepNumber - 1) / 2) * 100;
    document.querySelector(".progress-bar").style.width = progressPercentage + "%";
  };

  handleNextStep = () => {
    const { currentStep } = this.state;

    if (currentStep < 4) {
      this.displayStep(currentStep + 1);
    }
  };

  handlePrevStep = () => {
    const { currentStep } = this.state;
    if (currentStep > 1) {
      this.displayStep(currentStep - 1);
    }
  };

  render() {
    const { currentStep, firstname, lastname, dob, gender, email, address1, address2, state, city, pincode, country, mobile1, mobile2, otp } = this.state;

    return (
      <BasePage toggleHeader={true} toggleFooter={false} toggleSidebar={false}>
        <div className="create-project-container">
          <h2>Create Project</h2>
          <Row>
            <Col lg={12}>

              <div className="shadow rounded" style={{backgroundColor: "#fff"}}>
                <Row>
                  <Col md={5} className="ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-primary text-white text-center pt-5" style={{
                      'borderRadius': '1.25%',
                      'backgroundImage': { profile_avatar },
                      'opacity': '50%',
                    }}>
                      <h2 className="fs-1">Welcome to ProjectShala!!!</h2>
                    </div>
                  </Col>
                  <Col md={7} className="pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <Form id="multi-step-form" action="" method="POST" className="row g-4">
                        <Col md={12}>
                          <div className="progress px-1" style={{ height: '4px' }}>
                            <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>

                          <div className="step-container d-flex justify-content-between">
                            {[1, 2, 3].map(step => (
                              <div key={step} className="step-circle" onClick={() => this.displayStep(step)}>{step}</div>
                            ))}
                          </div>

                          {/* Step 1 */}
                          <div className="step step-1">
                            <h3>Basic Details</h3>
                            <div className="mb-3">
                              <Row className="g-3">
                                <Row>
                                  <Col md={6}>
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control
                                      name="projectname"
                                      type="text"
                                      placeholder="Project Name"
                                      onChange={(e) => this.setState({ projectname: e.target.value })}
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={100}>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                      name="desc"
                                      type="text"
                                      placeholder="Project Description"
                                      onChange={(e) => this.setState({ projectdesc: e.target.value })}
                                    />
                                  </Col>
                                </Row>
                                <Col md={6}>
                                  <Form.Label>Start Date</Form.Label>
                                  <Form.Control name="startdate" type="date" placeholder="Beginning Date of Project" onChange={(e) => this.setState({ startdate: e.target.value })} />
                                </Col>
                                <Col md={6}>
                                  <Form.Label>Mode</Form.Label>
                                  <Form.Select name="mode" aria-label="Mode" onChange={(e) => this.setState({ mode: e.target.value })} >
                                    <option disabled value="">Select Mode</option>
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                    <option value="hybrid">Hybrid</option>
                                  </Form.Select>
                                </Col>
                                <Col md={12}>
                                  <Form.Label>Budget</Form.Label>
                                  <Form.Control name="budget" type="text" placeholder="Budget" onChange={(e) => this.setState({ budget: e.target.value })} />
                                </Col>
                              </Row>
                            </div>
                            <Button variant="primary" className="px-4 mt-4 prev-step" href="/">Back</Button>
                            <Button variant="primary" className="px-4 float-end mt-4" onClick={this.handleSubmitPage1}>Next</Button>
                          </div>

                          {/* Step 2 */}
                          <div className="step step-2">
                            <div className="mb-3 row g-3">
                              <Row>
                                <Col md={100}>
                                  <Form.Label>Add Tags</Form.Label>
                                  <Form.Control
                                    name="tags"
                                    type="text"
                                    placeholder="Tags"
                                    onChange={(e) => this.setState({ tags: e.target.value })}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col md={100}>
                                  <Form.Label>Expertise Required</Form.Label>
                                  <Form.Control
                                    name="address2"
                                    type="text"
                                    placeholder="Add Expertise..."
                                    onChange={(e) => this.setState({ address2: e.target.value })}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col md={100}>
                                  <Form.Label>Email Address</Form.Label>
                                  <Form.Control
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                  />
                                </Col>
                              </Row>
                            </div>
                            <Button variant="primary" className="px-4 mt-4 prev-step" onClick={this.handlePrevStep}>Previous</Button>
                            <Button variant="primary" className="px-4 float-end mt-4" onClick={this.handleSubmitPage2}>Next</Button>
                          </div>

                          {/* Step 3 */}
                          <div className="step step-3">
                            <h3>Confirmation</h3>
                            <div className="mb-3">
                              <p>Registration completed successfully!</p>
                            </div>
                            <Button variant="primary" className="px-4 mt-4 prev-step" onClick={this.handlePrevStep}>Previous</Button>
                            <Button type="submit" variant="primary" className="px-4 float-end mt-4" onClick={this.handleSubmitPage4}>Register</Button>
                          </div>
                        </Col>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <p className="text-end text-secondary mt-3">@{new Date().getFullYear()}</p>
            </Col>
          </Row>
        </div>
      </BasePage>
    )
  }
};