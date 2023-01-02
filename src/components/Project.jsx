import React from 'react'

const Project = ({title,discription,url_see,url_source,url_img}) => {
  return (
    <div className="row">
    <div className="col-lg-4 col-sm-12">
      <div className="project-wrapper__text load-hidden">
        <h3 className="project-wrapper__text-title">{title}  </h3>
        <div>
          <p className="mb-4">
                {discription}    
          </p>
        </div>
        <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero" href={url_see}>
          See Live
        </a>
        <a rel="noreferrer" target="_blank" className="cta-btn text-color-main" href={url_source}>
          Source Code
        </a>
      </div>
    </div>
    <div className="col-lg-8 col-sm-12">
      <div className="project-wrapper__image load-hidden">
        <a rel="noreferrer" href={url_see} target="_blank">
          <div
            data-tilt
            data-tilt-max="4"
            data-tilt-glare="true"
            data-tilt-max-glare="0.5"
            className="thumbnail rounded js-tilt">
            <img
              alt="Project Image1"
              className="img-fluid "
              src={url_img}/>
          </div>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Project