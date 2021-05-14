import React from "react";
import "./home.css";

function Home() {
  return (
    <section id="home">
      <div className="main">
        <img src="/images/sun.svg" />
        <h1> yaada </h1>
        <p> Yet another awesome digital agency </p>
      </div>
      <img className="cloud cloud1" src="/images/cloud1.svg" />
      <img className="cloud cloud2" src="/images/cloud2.svg" />
      <img className="cloud cloud3" src="/images/cloud3.svg" />
      <img className="cloud cloud4" src="/images/cloud4.svg" />
      <img className="cloud cloud5" src="/images/cloud1.svg" />
      <img className="cloud cloud6" src="/images/cloud4.svg" />
      <img className="cloud cloud7" src="/images/cloud3.svg" />
      <img className="cloud cloud8" src="/images/cloud4.svg" />
    </section>
  );
}

export default Home;
