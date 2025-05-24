import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  markers?: boolean;
  id?: string;
}

export const useGSAPAnimations = () => {
  const animationsRef = useRef<gsap.core.Timeline[]>([]);
  
  useEffect(() => {
    // Clean up animations on component unmount
    return () => {
      animationsRef.current.forEach(timeline => {
        if (timeline.scrollTrigger) {
          timeline.scrollTrigger.kill();
        }
        timeline.kill();
      });
      
      // Kill all ScrollTriggers associated with this component
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  const fadeIn = (element: string | Element, options: AnimationOptions = {}) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        toggleActions: options.toggleActions || "play none none reverse",
        scrub: options.scrub || false,
        markers: options.markers || false,
        id: options.id
      }
    });
    
    tl.fromTo(
      element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    
    animationsRef.current.push(tl);
    return tl;
  };

  const stagger = (elements: string | Element[], staggerTime: number = 0.1, options: AnimationOptions = {}) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || elements[0],
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        toggleActions: options.toggleActions || "play none none reverse",
        scrub: options.scrub || false,
        markers: options.markers || false,
        id: options.id
      }
    });
    
    tl.fromTo(
      elements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: staggerTime, duration: 0.8, ease: "power2.out" }
    );
    
    animationsRef.current.push(tl);
    return tl;
  };

  const slideIn = (element: string | Element, fromDirection: 'left' | 'right' | 'top' | 'bottom' = 'bottom', options: AnimationOptions = {}) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        toggleActions: options.toggleActions || "play none none reverse",
        scrub: options.scrub || false,
        markers: options.markers || false,
        id: options.id
      }
    });
    
    const props = {
      x: 0,
      y: 0,
      opacity: 0
    };
    
    switch (fromDirection) {
      case 'left':
        props.x = -100;
        break;
      case 'right':
        props.x = 100;
        break;
      case 'top':
        props.y = -100;
        break;
      case 'bottom':
        props.y = 100;
        break;
    }
    
    tl.fromTo(
      element,
      { x: props.x, y: props.y, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    
    animationsRef.current.push(tl);
    return tl;
  };

  const scale = (element: string | Element, options: AnimationOptions = {}) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        toggleActions: options.toggleActions || "play none none reverse",
        scrub: options.scrub || false,
        markers: options.markers || false,
        id: options.id
      }
    });
    
    tl.fromTo(
      element,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );
    
    animationsRef.current.push(tl);
    return tl;
  };

  const parallax = (element: string | Element, strength: number = 0.5, options: AnimationOptions = {}) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || "top bottom",
        end: options.end || "bottom top",
        scrub: options.scrub !== undefined ? options.scrub : true,
        markers: options.markers || false,
        id: options.id
      }
    });
    
    tl.fromTo(
      element,
      { y: 0 },
      { y: () => -strength * 100, ease: "none" }
    );
    
    animationsRef.current.push(tl);
    return tl;
  };

  return {
    fadeIn,
    stagger,
    slideIn,
    scale,
    parallax
  };
};