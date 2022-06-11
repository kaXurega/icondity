import { P5Instance } from 'react-p5-wrapper';
// import { logic } from '../core/logic';

export const sketch = (p: P5Instance) => {
  let rotation = 0;

  p.setup = () => {
    p.createCanvas(400, 400, p.WEBGL);
  };

  // eslint-disable-next-line
  p.updateWithProps = (props: any) => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p.draw = () => {
    p.background(100);
    p.normalMaterial();
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
}