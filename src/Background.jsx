import React from "react";
import sizeMe from "react-sizeme";

function Background({ size }) {
  const { width } = size;

  if (width < 800) {
    return (
      <img
        className="skyline-image"
        src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/palmsSunset1Artboard+1.png"
      ></img>
    );
  } else {
    return (
      <img
        className="skyline-image"
        src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/palmsSunset1Artboard+1.png"
      ></img>
    );
  }
}

export default sizeMe()(Background);
