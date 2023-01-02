import React from 'react';
import Project from './Project';
import {Project_data} from "../data/data";
const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {/*  Notice: each .row is a project  */}
            {Project_data.map(e=>{ return <Project key={e.id} title={e.title} discription={e.discription} url_see={e.url_see} url_source={e.url_source} url_img={e.url_img} />})}
          {/* // <!-- /END Project --> */}
        </div>
      </div>
    </section>

  )
}

export default Projects