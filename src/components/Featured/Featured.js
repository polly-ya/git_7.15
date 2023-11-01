import React from "react";
import FeaturedBanner from "./FeaturedBanner";
import Display from "../Home/Display";

function Featured() {
  return (
    <>
      <FeaturedBanner
        value="Featured Products"
        url="https://salinaka-ecommerce.web.app/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png"
      />
      <Display value="" margin="10rem 15rem 5rem" />
    </>
  );
}

export default Featured;
