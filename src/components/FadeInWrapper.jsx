import React from 'react';
import useInView from '../hooks/UseInView';

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: `translateY(${isInView ? 0 : '20px'})`,
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;