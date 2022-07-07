import React from "react";
import { Fade } from "react-awesome-reveal";
const fading = () => {
  return (
    <div>
      <Fade cascade>
  <p>I enter first...</p>
  <p>...then comes my turn...</p>
  <p>...and finally you see me!</p>
</Fade>
    </div>
  );
};
export default fading;
