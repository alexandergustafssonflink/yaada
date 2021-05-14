import React from "react";
import "./about.css";
import Lottie from "react-lottie";
import birdData from "../../lotties/bird.json";
import tree from "../../lotties/tree.json";

function About() {
  const birdOptions = {
    loop: true,
    autoplay: true,
    animationData: birdData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const treeOptions = {
    // autoplay: true,
    animationData: tree,
    isStopped: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="about">
      <Lottie
        options={birdOptions}
        height={200}
        width={200}
        className="birdie"
      />
      <div className="about-main">
        <h1>
          A pragmatic, intergalactic digital agency - just like the rest of them{" "}
        </h1>
        <p>
          {" "}
          I'm living life on the run, will I end up in jail or die by a gun
          Can't hide when they come y'all know where I'm from, I ride with the
          son My outlook on this word is from a G'z perspective
        </p>
      </div>

      <img className="about-cloud-1" src="./images/cloud4.svg" />
      <img className="about-cloud-2" src="./images/cloud2.svg" />
      <img src="./images/background.png" className="green-background" />
    </section>
  );
}

export default About;
