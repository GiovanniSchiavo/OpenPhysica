import React from 'react';

const createImageComponent = (width) => ({ src, alt }) => {
  return <p><img src={src} alt={alt} style={{ width: `${width}%`, height: 'auto', minWidth: "150px", maxWidth:"750px" }} /></p>;
};

const Img25 = createImageComponent(25);
const Img33 = createImageComponent(33);
const Img50 = createImageComponent(50);
const Img75 = createImageComponent(75);
const Img100 = createImageComponent(100);

export { Img25, Img33, Img50, Img75, Img100 };