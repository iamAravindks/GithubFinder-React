import React from "react";
import Image from "./search.svg";
const Hero = ({ imgSrc }) => {
  return (
    <div className='text-center'>
      <img src={imgSrc} className='col-md-5 mt-5' alt='Waiting to search' />
    </div>
  );
};
Hero.defaultProps = {
  imgSrc: Image,
};

export default Hero;
