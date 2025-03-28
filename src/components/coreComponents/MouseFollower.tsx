import React, { useEffect, useState } from 'react';
import './MouseFollower.css';

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='mouse-follower'>
      <div
        className='mouse-gradient'
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </div>
  );
};

export default MouseFollower;