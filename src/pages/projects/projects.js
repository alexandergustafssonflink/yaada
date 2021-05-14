import React, { useRef, useEffect } from "react";
import "./projects.css";

function Projects() {
  const guldrush = useRef();
  const white = useRef();
  const matic = useRef();
  const tesla = useRef();

  let pDivs = [guldrush, white, matic, tesla];

  useEffect(() => {
    pDivs.forEach((div) => {
      div.current.addEventListener("click", (e) => {
        let pressedCross = false;
        if (e.target.classList.contains("p-div")) {
          let div = e.target;
        } else if (e.target.classList.contains("cross")) {
          let div = e.target.parentNode;
          div.classList.remove("show");
          pressedCross = true;
        } else {
          let div = e.target.parentNode;
        }
        let allNodes = Array.from(div.current.parentNode.children);

        let allProjects = allNodes.filter((n) => {
          if (n.classList.contains("p-div")) {
            return n;
          } else {
            return;
          }
        });
        allProjects.forEach((p) => {
          p.classList.remove("show");
          p.children[2].classList.add("hidden");
          p.children[0].classList.add("hidden");
          div.current.classList.add("hvr-glow");
        });
        if (pressedCross == false) {
          div.current.classList.add("show");
          div.current.classList.remove("hvr-glow");
          div.current.children[2].classList.remove("hidden");
          div.current.children[0].classList.remove("hidden");
        } else {
          div.current.children[2].classList.add("hidden");
          div.current.children[0].classList.add("hidden");
        }
      });
    });
  });

  return (
    <section id="projects">
      <img className="section-border" src="./images/border.svg" />
      <div className="cover-div"> </div>
      <h1> Projects </h1>
      <div className="p-whiteout p-div hvr-glow" ref={white}>
        <img src="./images/cross.svg" className="cross hidden" />
        <p> White out </p>{" "}
        <p className="hidden worktext">
          {" "}
          is a web application that handles 3d-models in grasshopper-files along
          with information regarding the model. The application generates a web
          page which can be reached by a third party through password where the
          third party can interact with the model and make adjustments according
          to parameters given in the grasshopper-file.
          <a href="https://github.com/alexandergustafssonflink/wo">
            {" "}
            Visit on GitHub{" "}
          </a>
        </p>
      </div>
      <div className="p-guldrush p-div hvr-glow" ref={guldrush}>
        <img src="./images/cross.svg" className="cross hidden" />
        <p> Guldrush.se </p>
        <p className="hidden worktext">
          {" "}
          is a price comparison site for precious metals. It was built as an
          exam @ Yrgo in Göteborg. Visit it at{" "}
          <a href="https://www.guldrush.se"> Guldrush.se </a>
        </p>
      </div>
      <div className="p-matic p-div hvr-glow" ref={matic}>
        <img src="./images/cross.svg" className="cross hidden" />
        <p> Matic tribe</p>{" "}
        <p className="hidden worktext">
          {" "}
          We started with the idea that mobility can be better. That’s why our
          membership plans give you exactly as much car as you want and the
          ability to share with your friends and family.{" "}
        </p>
      </div>
      <div className="p-teslaj p-div hvr-glow" ref={tesla}>
        <img src="./images/cross.svg" className="cross hidden" />
        <p> Teslajournalen</p>{" "}
        <p className="hidden worktext">
          {" "}
          is a application that handles work related travels for Tesla owners.
          We worked on the app along side the apps founders on{" "}
          <a href="https://www.matictribe.com"> Matic Tribe. </a> Visit the app
          at <a href="https://app.teslajournalen.se"> app.Teslajournalen.se </a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
