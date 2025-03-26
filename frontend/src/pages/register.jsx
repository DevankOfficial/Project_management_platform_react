import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from "axios";

import './css/register.css';

import csrftoken from "./helper/crsf";

import profile_avatar from "./images/profile_avatar.png";

import WebsiteTitle from "../info/title";
import countryOptions from "../info/country";
import BasePage from './Base';


const TITLE = WebsiteTitle + " - Register";


export default class Register extends Component {
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

    if (stepNumber >= 1 && stepNumber <= 4) {
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
    const progressPercentage = ((stepNumber - 1) / 3) * 100;
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
      <BasePage toggleHeader={true}>
        <div className="login-page">
          <div className="container">
            <Row>
              <Col lg={12}>
                <h3 className="mb-3">Register Now</h3>
                <div className="shadow rounded">
                  <Row style={{backgroundColor: "#fff"}}>
                    <Col md={7} className="pe-0">
                      <div className="form-left h-100 py-5 px-5">
                        <Form id="multi-step-form" action="" method="POST" className="row g-4">
                          <Col md={12}>
                            <div className="progress px-1" style={{ height: '4px' }}>
                              <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="step-container d-flex justify-content-between">
                              {[1, 2, 3, 4].map(step => (
                                <div key={step} className="step-circle" onClick={() => this.displayStep(step)}>{step}</div>
                              ))}
                            </div>

                            {/* Step 1 */}
                            <div className="step step-1">
                              <h3>Setup Account</h3>
                              <div className="mb-3">
                                <Row className="g-3">
                                  <Col md={6}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control name="firstname" type="text" placeholder='First Name' onChange={(e) => this.setState({ firstname: e.target.value })} />
                                  </Col>
                                  <Col md={6}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="lastname" type="text" placeholder='Last Name' onChange={(e) => this.setState({ lastname: e.target.value })} />
                                  </Col>
                                  <Col md={6}>
                                    <Form.Label>D.O.B.</Form.Label>
                                    <Form.Control name="dob" type="date" placeholder="Date of Birth" onChange={(e) => this.setState({ dob: e.target.value })} />
                                  </Col>
                                  <Col md={6}>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select name="gender" aria-label="Gender" onChange={(e) => this.setState({ gender: e.target.value })} >
                                      <option disabled value="">Select Gender</option>
                                      <option value="male">Male</option>
                                      <option value="female">Female</option>
                                      <option value="other">Other</option>
                                      <option value="prefer_not_to_say">Prefer not to say</option>
                                    </Form.Select>
                                  </Col>
                                  <Col md={12}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                                  </Col>
                                </Row>
                              </div>
                              <Button variant="primary" className="px-4 mt-4 prev-step" href="/">Back</Button>
                              <Button variant="primary" className="px-4 float-end mt-4" onClick={this.handleSubmitPage1}>Next</Button>
                            </div>

                            {/* Step 2 */}
                            <div className="step step-2">
                              <h3>Setup Address</h3>
                              <div className="mb-3 row g-3">
                                <Col md={6}>
                                  <Form.Label>Flat / House No., Apartment</Form.Label>
                                  <Form.Control name="address1" type="text" placeholder="Flat / House No., Apartment" onChange={(e) => this.setState({ address1: e.target.value })} />
                                </Col>
                                <Col md={6}>
                                  <Form.Label>Street, Landmark</Form.Label>
                                  <Form.Control name="address2" type="text" placeholder="Street, Landmark" onChange={(e) => this.setState({ address2: e.target.value })} />
                                </Col>
                                <Col md={6}>
                                  <Form.Label>State</Form.Label>
                                  <Form.Control name="state" type="text" placeholder="State" onChange={(e) => this.setState({ state: e.target.value })} />
                                </Col>
                                <Col md={6}>
                                  <Form.Label>City</Form.Label>
                                  <Form.Control name="city" type="text" placeholder="City" onChange={(e) => this.setState({ city: e.target.value })} />
                                </Col>
                                <Col md={6}>
                                  <Form.Label>Pin-code</Form.Label>
                                  <Form.Control name="pincode" type="text" placeholder="Pin-code" onChange={(e) => this.setState({ pincode: e.target.value })} />
                                </Col>
                                <Col md={6}>
                                  <Form.Label>Country</Form.Label>
                                  <Form.Control as="select" name="country" onChange={(e) => this.setState({ country: e.target.value })} >
                                    <option disable="true">Select Country</option>
                                    {countryOptions.map((country, index) => (
                                      <option key={index} value={country.name}>
                                        {country.name}
                                      </option>
                                    ))}
                                  </Form.Control>
                                </Col>
                              </div>
                              <Button variant="primary" className="px-4 mt-4 prev-step" onClick={this.handlePrevStep}>Previous</Button>
                              <Button variant="primary" className="px-4 float-end mt-4" onClick={this.handleSubmitPage2}>Next</Button>
                            </div>

                            {/* Step 3 */}
                            <div className="step step-3">
                              <h3>Security</h3>
                              <div className="mb-3 row g-3">
                                <Col md={3}>
                                  <Form.Label>Country</Form.Label>
                                </Col>
                                <Col md={9}>
                                  <Form.Label>Mobile Number</Form.Label>
                                </Col>
                                <Col md={3}>
                                  <Form.Control as="select" name="mobile1" onChange={(e) => this.setState({ mobile1: e.target.value })} >
                                    <option disable="true">Select Country</option>
                                    {countryOptions.map((country, index) => (
                                      <option key={index} value={country.phone}>
                                        {country.code} (+{country.phone} )
                                      </option>
                                    ))}
                                  </Form.Control>
                                </Col>
                                <Col md={7}>
                                  <Form.Control name="mobile2" type="text" placeholder="Mobile No." onChange={(e) => this.setState({ mobile2: e.target.value })} />
                                </Col>
                                <Col md={2}>
                                  <Button variant="primary" className="center" onClick={this.handleGetOTP}>Get OTP</Button>
                                </Col>
                                <Col md={12}>
                                  <Form.Label>OTP </Form.Label>
                                  <Form.Control name="otp" type="text" placeholder="" />
                                </Col>
                              </div>
                              <Button variant="primary" className="px-4 mt-4 prev-step" onClick={this.handlePrevStep}>Previous</Button>
                              <Button variant="primary" className="px-4 float-end mt-4" onClick={this.handleSubmitPage3}>Next</Button>
                            </div>

                            {/* Step 4 */}
                            <div className="step step-4">
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
                    <Col md={5} className="ps-0 d-none d-md-block">
                      <div className="form-right h-100 bg-primary text-white text-center pt-5" style={{'borderRadius':'1.25%'}}>
                        {/* <i className="bi bi-bootstrap"></i> */}
                        <h2 className="fs-1">Welcome to ProjectShala!!</h2>
                        {/* <img src={profile_avatar} style={{ objectFit: 'contain' }} alt="Profile Avatar" /> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                {/* <p className="text-end text-secondary mt-3">By Vignesh Goswami</p> */}
                <p className="text-end text-secondary mt-3">@{new Date().getFullYear()}</p>
              </Col>
            </Row>
          </div>
        </div>
      </BasePage>
    )
  }
}