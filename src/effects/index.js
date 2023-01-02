import ScrollReveal from 'scrollreveal'
import VanillaTilt from "vanilla-tilt";

export function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return; 
    ScrollReveal({ reset: false });
    targetElements.forEach(({ element, animation }) => {
     ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
  }
export function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
  }

  




  
