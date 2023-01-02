import React from 'react'
import {defaultProps,targetElements} from '../data/data'
import {initScrollReveal,initTiltAnimation } from '../effects/index'
function About() {

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden ">
              <img
                alt="Profile Image"
                className=" shadow-lg border border-4 rounded  rounded-1  border-light js-tilt"
                height="570"
                src="assets/profile.jpeg"
                type="image"
                />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <h1 className="about-wrapper__info-text">
              I am a full stack junior developer with experience in JavaScript, ReactJS, PHP Laravel, MySQL, Bootstrap, SASS, Tailwind CSS.
              </h1>
              <p className="about-wrapper__info-text">
              I enjoy engaging in hobbies such as chess, basketball, and football in my free time.
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="assets/resume.pdf">
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default About