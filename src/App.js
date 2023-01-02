import React, { useEffect } from "react";
import {Header, About, Projects, Contact ,Footer} from './components/index';
import {defaultProps,targetElements} from './data/data'
import {initScrollReveal,initTiltAnimation } from './effects/index'





const App=()=> {
  useEffect(()=>{
    initScrollReveal(targetElements,defaultProps)
    initTiltAnimation()
  }
  
  )
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
