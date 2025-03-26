import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasePage from '../Base';

import './css/conn.css';
import { profiles, professions } from './info.js';
import {ProfileList} from './ProfList';
import countryOptions from '../../info/country';
import ProfessionList from './jobs.js';
import img1 from "./img/carousel-1.jpg";
import img2 from "./img/carousel-2.jpg";

import Slider from '../helper/slider.jsx';
const images = [
  img1,
  img2
];
const slides = [
  <h2>Slide-01</h2>,
  <h2>Slide-02</h2>
];
const labels = [
  <h2>Label-01</h2>,
  <h2>Label-02</h2>
];
const texts = [
  <p>Text-01</p>,
  <p>Text-02</p>
];

const sliderImages = {
  [images[0]]: [slides[0], labels[0], texts[0]],
  [images[1]]: [slides[1], labels[1], texts[1]]
};

const ConnectPage = () => {
  const { isLoggedIn } = true;
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [recommendedProfiles, setRecommendedProfiles] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProfessionSelect = (professionName) => {
    setSelectedProfession(professionName);
  };
  const handleRecomSelect = (r) => {
    setRecommendedProfiles(r);
  };

  const handleViewProfile = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <BasePage toggleHeader={true} toggleSidebar={true} toggleFooter={true}>
      <div className="connection-page">
        <Slider slides={sliderImages} />

        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" }}>
          <div class="container">
            <div class="row g-2">
              <div class="col-md-10">
                <div class="row g-2">
                  <div class="col-md-4">
                    <input type="text" class="form-control border-0" placeholder="Search..." />
                  </div>
                  <div class="col-md-4">
                    <select class="form-select border-0">
                      <option selected>Category</option>
                      <option value="1">Full Time</option>
                      <option value="2">Part Time</option>
                      <option value="3">FreeLancer</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <select class="form-select border-0">
                      <option disable="true">Location</option>
                      {countryOptions.map((country, index) => (
                        <option key={index} value={country.phone}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <button class="btn btn-dark border-0 w-100">Search</button>
              </div>
            </div>
          </div>
        </div>


        {/* Category */}
        <div class="container-xxl py-5">
          <div class="container">
            <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
            <ProfessionList professions={professions} />
          </div>
        </div>

        <div class="container-xxl py-5">
          <div class="container">
            <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
            <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active animated-nav-link" data-bs-toggle="pill" href="#tab-1" onClick={handleRecomSelect}>
                    <h6 className="mt-n1 mb-0">Featured</h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 pb-3 animated-nav-link" data-bs-toggle="pill" href="#tab-2">
                    <h6 className="mt-n1 mb-0">Full Time</h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3 animated-nav-link" data-bs-toggle="pill" href="#tab-3">
                    <h6 className="mt-n1 mb-0">Part Time</h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3 animated-nav-link" data-bs-toggle="pill" href="#tab-4">
                    <h6 className="mt-n1 mb-0">Free Lancer</h6>
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                  <ProfileList profiles={profiles} />
                </div>
                <div id="tab-2" class="tab-pane fade show p-0">
                  <ProfileList profiles={profiles} />
                </div>
                <div id="tab-3" class="tab-pane fade show p-0">
                  <ProfileList profiles={profiles} />
                </div>
                <div id="tab-4" class="tab-pane fade show p-0">
                  <ProfileList profiles={profiles} />
                </div>
                <a class="btn btn-primary py-3 px-5" href="">Browse More Profiles</a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </BasePage>
  );
};

export default ConnectPage;