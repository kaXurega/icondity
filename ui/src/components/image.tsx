import React from 'react';
import { useEffect, useState } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import { sketch } from '../core/sketch';
import '../layout/Body.scss';

const Image = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRotation(rotation => rotation + 100),
      100
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="canvas" id="image">
      <ReactP5Wrapper alt="icondity" sketch={sketch} rotation={rotation} />
    </div>
  );
}

export default Image;