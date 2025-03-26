import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import axios from "axios";

import AOS from 'aos';
import Typed from 'typed.js';
import PureCounter from "@srexi/purecounterjs";

import './assets/vendor/aos/aos.css';
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import './assets/css/style.css';
import './css/profile.css';

import TITLE from "../info/title";
import TopNavbar from './helper/topnavbar';
import SideNavbar from './helper/sidenavbar';
import Footer from '../component/Footer/footer';

import profile_avatar from "./images/profile_avatar.png";


const Page_TITLE = TITLE + " - Profile";
const username = "Vignesh Goswami";
const profileimage = profile_avatar;


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            todoList: [],
            modal: false,
            activeItem: {
                title: "",
                description: "",
                completed: false,
            },
        };
    }
    
    componentDidMount() {
        this.refreshList();
        document.title = Page_TITLE;
        
        console.log("tinee")
        AOS.init({
            offset: 200,
            duration: 50,
            delay: 0,
        });
        console.log("tinee2")
        AOS.refresh();
        console.log("tinee3")
        
        const options = {
            strings: ["Designer", "Developer", "Freelancer", "Photographer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
    
        this.typed = new Typed(".typed", options);

        new PureCounter();
    }

    refreshList = () => {
        axios
            .post("/api/profile/")
            .then((res) => this.setState({ todoList: res.data }))
            .catch((err) => console.log(err));
    };

    componentWillUnmount() {
        if (this.typed) {
            this.typed.destroy();
        }
    }

    render() {
        return (
            <>
                <SideNavbar username={ username } profileimage={ profileimage }>
                    <div className='profile-container'>
                        {/* Hero */}
                        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                            <div className="hero-container" data-aos="fade-in">
                                <h1>{ username }</h1>
                                <p>
                                    I'm <span className="typed"></span>
                                </p>
                            </div>
                        </section>

                        {/* <main id="main"> */}
                            {/* About */}
                            <section id="about" className="about">
                                <Container>
                                    <div className="section-title">
                                        <h2>About</h2>
                                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                    </div>
                                    <Row>
                                        <Col lg={4} data-aos="fade-right">
                                            <Image src={ profileimage } className="img-fluid" alt="" />
                                        </Col>
                                        <Col lg={8} className="pt-4 pt-lg-0 content" data-aos="fade-left">
                                            <h3>UI/UX Designer &amp; Web Developer.</h3>
                                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <Row>
                                                <Col lg={6}>
                                                    <ul>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                                    </ul>
                                                </Col>
                                                <Col lg={6}>
                                                    <ul>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            {/* Facts */}
                            <section id="facts" className="facts" ref={this.factsRef}>
                                <Container>
                                    <Row className="section-title">
                                        <h2>Facts</h2>
                                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                    </Row>
                                    <Row className="no-gutters">
                                        <Col lg={3} md={6} className="d-md-flex align-items-md-stretch" data-aos="fade-up">
                                            <div className="count-box">
                                                <i className="bi bi-emoji-smile"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                                <p><strong>Happy Clients</strong> consequuntur quae</p>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} className="d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                                            <div className="count-box">
                                                <i className="bi bi-journal-richtext"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} className="d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                                            <div className="count-box">
                                                <i className="bi bi-headset"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} className="d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                                            <div className="count-box">
                                                <i className="bi bi-people"></i>
                                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                                                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            {/* Skills */}
                            <section id="skills" className="skills section-bg">
                                <Container>
                                    <Row className="section-title">
                                        <h2>Skills</h2>
                                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                    </Row>
                                    <Row className="skills-content">
                                        <Col lg={6} data-aos="fade-up">
                                            <div className="progress">
                                                <span className="skill">HTML <i className="val">100%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <span className="skill">CSS <i className="val">90%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                            <div className="progress">
                                                <span className="skill">PHP <i className="val">80%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <span className="skill">Photoshop <i className="val">55%</i></span>
                                                <div className="progress-bar-wrap">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            {/* Resume */}
                            <section id="resume" className="resume">
                                <Container>
                                    <Row className="section-title">
                                        <h2>Resume</h2>
                                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                    </Row>
                                    <Row>
                                        <Col lg={6} data-aos="fade-up">
                                            <h3 className="resume-title">Sumary</h3>
                                            <div className="resume-item pb-0">
                                                <h4>Alex Smith</h4>
                                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                                <ul>
                                                    <li>Portland par 127, Orlando, FL</li>
                                                    <li>(123) 456-7891</li>
                                                    <li>alex@example.com</li>
                                                </ul>
                                            </div>
                                            <h3 className="resume-title">Education</h3>
                                            <div className="resume-item">
                                                <h4>Master of Fine Arts &amp; Graphic Design</h4>
                                                <h5>2015 - 2016</h5>
                                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.</p>
                                            </div>
                                            <div className="resume-item">
                                                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                                                <h5>2010 - 2014</h5>
                                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.</p>
                                            </div>
                                        </Col>
                                        <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                                            <h3 className="resume-title">Professional Experience</h3>
                                            <div className="resume-item">
                                                <h4>Senior graphic design specialist</h4>
                                                <h5>2019 - Present</h5>
                                                <p><em>Experion, New York, NY </em></p>
                                                <ul>
                                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                                </ul>
                                            </div>
                                            <div className="resume-item">
                                                <h4>Graphic design specialist</h4>
                                                <h5>2017 - 2018</h5>
                                                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                                                <ul>
                                                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            {/* Portfolio */}
                            <section id="portfolio" className="portfolio section-bg">
                                <div className="container">
                                <div className="section-title">
                                    <h2>Portfolio</h2>
                                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                </div>
                                <div className="row" data-aos="fade-up">
                                    <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-app">App</li>
                                        <li data-filter=".filter-card">Card</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <Image src={ profile_avatar } className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                        <h4>Web 1</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus"></i></a> */}
                                            {/* <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </section>

                            {/* Services */}
                            <section id="services" className="services">
                                <Container>
                                    <Row className="section-title">
                                        <h2>Services</h2>
                                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                    </Row>
                                    <Row>
                                        <Col lg={4} md={6} className="icon-box" data-aos="fade-up">
                                            <div className="icon">
                                                <i className="bi bi-briefcase"></i>
                                            </div>
                                            <h4 className="title">
                                                <a href="#services">Lorem Ipsum</a>
                                            </h4>
                                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                        </Col>
                                        <Col lg={4} md={6} className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                            <div className="icon">
                                                <i className="bi bi-card-checklist"></i>
                                            </div>
                                            <h4 className="title">
                                                <a href="#services">Dolor Sitema</a>
                                            </h4>
                                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                        </Col>
                                        <Col lg={4} md={6} className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                            <div className="icon">
                                                <i className="bi bi-bar-chart"></i>
                                            </div>
                                            <h4 className="title">
                                                <a href="#services">Sed ut perspiciatis</a>
                                            </h4>
                                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                        </Col>
                                        <Col lg={4} md={6} className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                            <div className="icon">
                                                <i className="bi bi-binoculars"></i>
                                            </div>
                                            <h4 className="title">
                                                <a href="#services">Magni Dolores</a>
                                            </h4>
                                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                        </Col>
                                        <Col lg={4} md={6} className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                            <div className="icon">
                                                <i className="bi bi-brightness-high"></i>
                                            </div>
                                            <h4 className="title">
                                                <a href="#services">Nemo Enim</a>
                                            </h4>
                                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                        </Col>
                                        <Col lg={4} md={6} className="icon-box" data-aos="fade-up" data-aos-delay="500">
                                            <div className="icon">
                                                <i className="bi bi-calendar4-week"></i>
                                            </div>
                                            <h4 className="title">
                                                <a href="#services">Eiusmod Tempor</a>
                                            </h4>
                                            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                            {/* Testimonials */}
                            <section id="testimonials" className="testimonials section-bg">
                                <Container>
                                    <Row className="section-title">
                                        <h2>Testimonials</h2>
                                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                    </Row>
                                    <Row className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                                        <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <Image src={ profile_avatar } className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <Image src={ profile_avatar } className="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <Image src={ profile_avatar } className="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <Image src={ profile_avatar } className="testimonial-img" alt="" />
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa.
                                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <Image src={ profile_avatar } className="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </Row>
                                </Container>
                            </section>

                            {/* Contact */}
                            <section id="contact" className="contact">
                                <Container>
                                    <div className="section-title">
                                        <h2>Contact</h2>
                                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                                    </div>
                                    <Row>
                                        <div className="col-lg-4" data-aos="fade-right">
                                            <div className="info">
                                                <div className="address">
                                                    <i className="bi bi-geo-alt"></i>
                                                    <h4>Location:</h4>
                                                    <p>A108 Adam Street, New York, NY 535022</p>
                                                </div>
                                                <div className="email">
                                                    <i className="bi bi-envelope"></i>
                                                    <h4>Email:</h4>
                                                    <p>info@example.com</p>
                                                </div>
                                                <div className="phone">
                                                    <i className="bi bi-phone"></i>
                                                    <h4>Call:</h4>
                                                    <p>+1 5589 55488 55</p>
                                                </div>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" border="0" width="100%" height="290px" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
                                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                                <Row>
                                                    <div className="col-md-6 form-group">
                                                        <label>Your Name</label>
                                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                                    </div>
                                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                                        <label>Your Email</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                                    </div>
                                                </Row>
                                                <div className="form-group mt-3">
                                                    <label>Subject</label>
                                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                                    </div>
                                                <div className="form-group mt-3">
                                                    <label>Message</label>
                                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                                </div>
                                                <div className="my-3">
                                                    <div className="loading">Loading</div>  
                                                    <div className="error-message"></div>
                                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                                </div>
                                                <div className="text-center"><button type="submit">Send Message</button></div>
                                            </form>
                                        </div>
                                    </Row>
                                </Container>
                            </section>
                        {/* </main> */}
                    </div>
                    <Footer />
                </SideNavbar>
            </>
        );
    }
}
