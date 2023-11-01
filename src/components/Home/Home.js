import React from "react";
import Banner from "./Banner";
import Display from "./Display";

function Home() {
  return (
    <>
      <Banner />
      <Display value="Featured Product" margin="10rem 15rem 5rem" />
      <Display value="Recommended Products" margin="10rem 15rem 5rem" />
    </>
  );
}

export default Home;
