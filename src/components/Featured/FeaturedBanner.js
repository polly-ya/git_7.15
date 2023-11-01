import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../Home/Banner.css";

function FeaturedBanner(props) {
  return (
    <div className="banner row">
      <div className="col-lg-6 px-0 d-flex align-items-center justify-content-center">
        <h1 className="text-thin" style={{ fontSize: "4.8rem" }}>
          {props.value}
        </h1>
      </div>
      <div
        className="banner-img col-lg-6 px-0"
        style={{
          backgroundImage: `url(${props.url})`,
        }}
      ></div>
    </div>
  );
}

export default FeaturedBanner;
