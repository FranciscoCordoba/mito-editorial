import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal component wraps its children and applies a reveal animation when they enter the viewport.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.animation - CSS class for the animation (reveal, reveal-left, reveal-right, reveal-scale)
 * @param {number} props.delay - Delay in milliseconds before starting the animation
 * @param {string} props.className - Additional utility classes
 */
export default function Reveal({ children, animation = 'reveal', delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${animation} ${isVisible ? 'active' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
