import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FullName2 from "./FullName2";
import SoftDev from "./SoftDev";
import { data } from "./data/data";
import Card from "./Card";
import { SizeMe } from "react-sizeme";
import Background from "./Background";
import CarouselSpring from "./CarouselSpring";

function App() {
  const [portDisplay, setPortDisplay] = useState(false);
  const [linksDisplay, setLinksDisplay] = useState(true);
  const [accountsDisplay, setAccountsDisplay] = useState(true);
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[0]);
  const [appAddress, setAppAddress] = useState(property.name);
  const [appColor, setAppColor] = useState(property.color);
  //const [goToSlide, setGoToSlide] = useState(0);

  let portStyleOne = {
    position: "absolute",
    top: "2px",
    height: "40vh",
    left: "5%",
    width: "90%",
    transition: "width 2s",
    background: "red",
    zIndex: "4",
    display: "block"
  };

  if (portDisplay === true) {
    portStyleOne = {
      position: "absolute",
      top: "0px",
      height: "80vh",
      left: "5%",
      width: "0%",
      transition: "width 2s",
      background: "red",
      zIndex: "4",
      display: "none"
    };
  }

  function nextProperty() {
    const newIndex = property.index + 1;
    if (property.index < properties.length - 1) {
      setProperty(data.properties[newIndex]);
    } else {
      setProperty(data.properties[0]);
    }
  }

  function prevProperty() {
    const newIndex = property.index - 1;
    if (property.index > 0) {
      setProperty(data.properties[newIndex]);
    } else {
      setProperty(data.properties[properties.length - 1]);
    }
  }

  return (
    <div className="App">
      <nav></nav>
      <div className="skyline">
        <Background />
        <div className={portDisplay ? "fade-port-in" : "fade-port-out"}>
          <img
            class="source-image"
            src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/palmsSunset1Artboard+1.png
"
            alt=""
          />

          <button
            className="exit-button"
            onClick={() => {
              setPortDisplay(portDisplay => !portDisplay);
              setLinksDisplay(linksDisplay => !linksDisplay);
              setAccountsDisplay(accountsDisplay => !accountsDisplay);
            }}
          >
            X
          </button>
          {/*
          <button
            className="next-button"
            onClick={() => {
              setGoToSlide(goToSlide => goToSlide + 1);
              console.log({ goToSlide });
            }}
          >
            +
          </button>
          <button
            className="prev-button"
            onClick={() => {
              setGoToSlide(goToSlide => goToSlide - 1);
              console.log({ goToSlide });
            }}
          >
            -
          </button> */}
          <div className="page">
            <section>
              <h1>REACT APPLICATIONS</h1>
            </section>
            <CarouselSpring
              showNavigation={false}
              nextProperty={nextProperty}
              prevProperty={prevProperty}
              name={property.name}
              color={property.color}
              appLink={property.app}
              gitLink={property.github}
            />
            {/*<Card property={property} /> */}
          </div>
        </div>
        <div className={linksDisplay ? "tape-holder" : "fade-tape-holder-out"}>
          <FullName2 />
          <SoftDev />
        </div>
        <ul
          className={linksDisplay ? "fade-links-in" : "fade-links-out"}
          id="link-wrapper"
        >
          <button
            className="link"
            onClick={() => {
              setPortDisplay(portDisplay => !portDisplay);
              setLinksDisplay(linksDisplay => !linksDisplay);
              setAccountsDisplay(accountsDisplay => !accountsDisplay);
            }}
          >
            PROJECTS
          </button>
          <button className="link" onClick={() => console.log(linksDisplay)}>
            SKILLS
          </button>
          <li className="link">CONTACT</li>
          <li className="link">RESUME</li>
        </ul>
      </div>
      <div className="foot">
        <div
          className={accountsDisplay ? "fade-accounts-in" : "fade-accounts-out"}
          id="accounts-wrapper"
        >
          <div className="account-holder">
            <img
              className="account-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/115504-128.png"
            ></img>
            <div>Github</div>
          </div>
          <div className="account-holder">
            <img
              className="account-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/3057688-128.png"
            ></img>
            <div>Linkedin</div>
          </div>

          <div className="account-holder">
            <img
              className="account-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/fcc_primary_small.png"
            ></img>
            <div>freeCodeCamp</div>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="skills-wrapper">
          <div className="skills-holder">
            <img
              className="skills-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/HTML5/169775-128+(1).png"
            ></img>
            <div>HTML5</div>
          </div>
          <div className="skills-holder">
            <img
              className="skills-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/CSS/317756-128+(1).png"
            ></img>
            <div>CSS</div>
          </div>
          <div className="skills-holder">
            <img
              className="skills-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/bootstrap/bootstrapTransparentTest2.png"
            ></img>
            <div>Bootstrap4</div>
          </div>
          <div className="skills-holder">
            <img
              className="skills-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/javascript/javascriptICONperfFINALAsset+1.png"
            ></img>
            <div>JavaScript</div>
          </div>
          <div className="skills-holder">
            <img
              className="skills-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/NodeJS+Icon/1012818-128.png"
            ></img>
            <div>Node.js</div>
          </div>
          <div className="skills-holder">
            <img
              className="skills-image"
              src="https://freecodecampassets.s3.us-east-2.amazonaws.com/Portfolio+Assets+1/react+icon/1174949-128.png"
            ></img>
            <div>React</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
