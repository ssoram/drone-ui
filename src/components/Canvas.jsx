import React from "react";
import Sketch from "react-p5";

export default function Canvas() {
  let x = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);
    p5.fill(0);
    p5.ellipse(x, 200, 40, 40); // 드론 대신 원
    x += 2;
    if (x > p5.width) x = 0;
  };

  return <Sketch setup={setup} draw={draw} />;
}
 
