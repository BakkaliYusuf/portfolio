import React from 'react'

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links ">
          <div>
            <a rel="noreferrer" href="#!" target="_blank">
              <i className="fa fa-whatsapp fa-inverse"></i>
              <p style={{fontSize:"12px"}}>Whatsapp</p> 
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="#!" target="_blank">
              <i className="fa fa-twitter fa-inverse"></i>
              <p style={{fontSize:"12px"}}>Twitter</p> 
            </a>
          </div>
          <div>
            <a rel="noreferrer" href="#!" target="_blank">
              <i className="fa fa-linkedin fa-inverse"></i>
              <p style={{fontSize:"12px"}} >Linkedin</p> 
            </a>
          </div>
          <div className="">
            <a rel="noreferrer" href="#!" target="_blank">
              <i className="fa fa-facebook fa-inverse"></i><br/>
              <p style={{fontSize:"12px"}}>Facebook</p> 
            </a>
          </div>
          <div className="text-center">
            <a rel="noreferrer" href="#!" target="_blank">
              <i className="fa fa-github fa-inverse"></i><br/>
              <p style={{fontSize:"12px"}}>github</p> 
            </a>
          </div>
          
        </div>
        <hr />

        {/* <!-- Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it --> */}
        <p className="footer__text">© 2023 - Template developed by<a rel="noreferrer" href="https://github.com/cobiwave" target="_blank">Jacobo Martínez</a></p>  
      </div>
    </footer>
  )
}

export default Footer