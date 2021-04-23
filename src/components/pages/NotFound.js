import React from "react";
import Hero from "../layout/Hero";
import Error from "../layout/error.svg";
const NotFound = () => {
  return (
    <>
      <Hero imgSrc={Error} />
    </>
  );
};

export default NotFound;
