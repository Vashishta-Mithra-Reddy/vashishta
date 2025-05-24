import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in animation
export const fadeInAnimation = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      delay,
      ease: "power3.out"
    }
  );
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements: string | Element[], stagger: number = 0.1) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      stagger, 
      duration: 0.8, 
      ease: "power2.out" 
    }
  );
};

// Reveal animation triggered by scroll
export const scrollReveal = (element: string | Element, options = {}) => {
  const defaultOptions = {
    trigger: element,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  };

  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        ...defaultOptions,
        ...options
      }
    }
  );
};

// Text reveal animation
export const textReveal = (element: string | Element) => {
  return gsap.fromTo(
    element,
    { 
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" 
    },
    { 
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    }
  );
};

// Scale animation
export const scaleAnimation = (element: string | Element) => {
  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    }
  );
};

// Parallax effect
export const parallaxEffect = (element: string | Element, strength: number = 0.5) => {
  return gsap.fromTo(
    element,
    { y: 0 },
    {
      y: () => -strength * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    }
  );
};

// Horizontal slide animation
export const slideInFromSide = (element: string | Element, fromLeft: boolean = true) => {
  return gsap.fromTo(
    element,
    { x: fromLeft ? -100 : 100, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    }
  );
};

// Rotate animation
export const rotateAnimation = (element: string | Element) => {
  return gsap.fromTo(
    element,
    { rotation: -10, opacity: 0 },
    { 
      rotation: 0, 
      opacity: 1, 
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    }
  );
};