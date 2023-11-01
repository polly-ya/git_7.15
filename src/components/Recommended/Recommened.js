import React from "react";
import Banner from "../Home/Banner";
import Display from "../Home/Display";
import FeaturedBanner from "../Featured/FeaturedBanner";

function Recommended() {
  return (
    <>
      <FeaturedBanner
        value="Recommended Products"
        url="https://salinaka-ecommerce.web.app/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png"
      />
      <Display value="" margin="10rem 15rem 5rem" />
    </>
  );
}

export default Recommended;
