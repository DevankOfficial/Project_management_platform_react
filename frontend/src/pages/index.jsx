// Imports
import React, { Component } from 'react';

// CSS
import './css/index.css';

// Helper
import TITLE from "../info/title";
import Slider from './helper/slider';
import AboutUs from './helper/aboutus';
import Testimonials from './helper/testimonials';

// Images
import profile_avatar from "./images/profile_avatar.png";
import image01 from "./images/image01.jpg";
import image02 from "./images/image02.jpg";
import image03 from "./images/image03.jpg";
import image04 from "./images/image04.jpg";
import image05 from "./images/image05.jpg";
import image06 from "./images/image06.jpg";
import image07 from "./images/image07.jpg";
import image08 from "./images/image08.jpg";
import image09 from "./images/image09.jpg";
import image10 from "./images/image10.jpg";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.jpg";
import image14 from "./images/image14.jpg";
import image15 from "./images/image15.jpg";
import BasePage from './Base';


const images = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15
];
const slides = [
  <h2>Slide-01</h2>,
  <h2>Slide-02</h2>,
  <h2>Slide-03</h2>,
  <h2>Slide-04</h2>,
  <h2>Slide-05</h2>,
  <h2>Slide-06</h2>,
  <h2>Slide-07</h2>,
  <h2>Slide-08</h2>,
  <h2>Slide-09</h2>,
  <h2>Slide-10</h2>,
  <h2>Slide-11</h2>,
  <h2>Slide-12</h2>,
  <h2>Slide-13</h2>,
  <h2>Slide-14</h2>,
  <h2>Slide-15</h2>
];
const labels = [
  <h2>Label-01</h2>,
  <h2>Label-02</h2>,
  <h2>Label-03</h2>,
  <h2>Label-04</h2>,
  <h2>Label-05</h2>,
  <h2>Label-06</h2>,
  <h2>Label-07</h2>,
  <h2>Label-08</h2>,
  <h2>Label-09</h2>,
  <h2>Label-10</h2>,
  <h2>Label-11</h2>,
  <h2>Label-12</h2>,
  <h2>Label-13</h2>,
  <h2>Label-14</h2>,
  <h2>Label-15</h2>
];
const texts = [
  <p>Text-01</p>,
  <p>Text-02</p>,
  <p>Text-03</p>,
  <p>Text-04</p>,
  <p>Text-05</p>,
  <p>Text-06</p>,
  <p>Text-07</p>,
  <p>Text-08</p>,
  <p>Text-09</p>,
  <p>Text-10</p>,
  <p>Text-11</p>,
  <p>Text-12</p>,
  <p>Text-13</p>,
  <p>Text-14</p>,
  <p>Text-15</p>
];

const sliderImages = {
  [images[0]]: [slides[0], labels[0], texts[0]],
  [images[1]]: [slides[1], labels[1], texts[1]],
  [images[2]]: [slides[2], labels[2], texts[2]],
  [images[3]]: [slides[3], labels[3], texts[3]],
  [images[4]]: [slides[4], labels[4], texts[4]],
  [images[5]]: [slides[5], labels[5], texts[5]],
  [images[6]]: [slides[6], labels[6], texts[6]],
  [images[7]]: [slides[7], labels[7], texts[7]],
  [images[8]]: [slides[8], labels[8], texts[8]],
  [images[9]]: [slides[9], labels[9], texts[9]],
  [images[10]]: [slides[10], labels[10], texts[10]],
  [images[11]]: [slides[11], labels[11], texts[11]],
  [images[12]]: [slides[12], labels[12], texts[12]],
  [images[13]]: [slides[13], labels[13], texts[13]],
  [images[14]]: [slides[14], labels[14], texts[14]]
};

const Page_TITLE = TITLE;
const username = "Vignesh Goswami";
const profileimage = profile_avatar;


export default class Index extends Component {
  componentDidMount() {
    document.title = Page_TITLE;
  }


  render() {
    const isLoggedIn = true;

    return (
      <>
        <BasePage toggleHeader={true} toggleFooter={true} toggleSidebar={isLoggedIn}>
          <Slider slides={sliderImages} />
          <AboutUs />
          <Testimonials />
        </BasePage>
      </>
    )
  }
}