import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { showLinks, showPort, showAccounts } from "../actions/homeActions.js";
import node from "../images/node.png";
import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import reactLogo from "../images/reactLogo.png";
import mongoDB from "../images/mongoDB.png";
import express from "../images/express.png";
import vueLogo from "../images/vueLogo.png";
import CarouselSpring from "./CarouselSpring";
import purpleClouds from "../images/purpleClouds.png";
import Links from "./Links.jsx";
import NavLinks from "./NavLinks.jsx";
import { data } from "../data/data";
import Name from "./Name.jsx";
import fullStackDev from "../images/fullStackDev.png";

function Skyline(props) {
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[5]);
  const [appAddress, setAppAddress] = useState(property.name);
  const [appColor, setAppColor] = useState(property.color);
  const [showLinks, setShowLinks] = useState(props.home.showLinks);

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

  useEffect(() => {
    setShowLinks(props.home.showLinks);
    console.log("show changed");
  }, [props.home.showLinks]);

  return (
    <div className="skyline">
      {" "}
      {/* div of 100 vw and 100 vh */}
      <div className="cloudsBox">
        <img
          src={purpleClouds}
          className={
            props.home.showLinks ? "clouds-fade-in" : "clouds-fade-out"
          }
        ></img>
      </div>
      {/* start of projects modal */}
      <div className={props.home.showPort ? "fade-port-in" : "fade-port-out"}>
        <button
          className="exit-button"
          onClick={() => {
            props.showLinks();
            props.showPort();
            props.showAccounts();
          }}
        >
          X
        </button>

        <CarouselSpring
          showNavigation={false}
          nextProperty={nextProperty}
          prevProperty={prevProperty}
          name={property.name}
          color={property.color}
          appLink={property.app}
          gitLink={property.github}
          description={property.description}
          note1={property.note1}
          note2={property.note2}
          note3={property.note3}
          show={showLinks}
          index={property.index}
        />
      </div>
      {/* End of projects modal */}
      <div className="skillsBox">
        <div className="logo1box">
          <img src={node} className="rotateLogo1"></img>
        </div>
        <div className="logo2box">
          <img src={html} className="rotateLogo2"></img>
        </div>
        <div className="logo3box">
          <img src={css} className="rotateLogo3"></img>
        </div>
        <div className="logo4box">
          <img src={bootstrap} className="rotateLogo4"></img>
        </div>
        <div className="logo5box">
          <img src={reactLogo} className="rotateLogo5"></img>
        </div>
        <div className="logo6box">
          <img src={mongoDB} className="rotateLogo6"></img>
        </div>
        <div className="logo7box">
          <img src={express} className="rotateLogo7"></img>
        </div>
        <div className="logo8box">
          <img src={vueLogo} className="rotateLogo8"></img>
        </div>
      </div>
      <Name />
      <div
        className={
          props.home.showLinks ? "fullStackDevBox" : "fullStackDevBox-fade-out"
        }
      >
        <img src={fullStackDev} className="fullStackDev"></img>
      </div>
      <NavLinks />
      <Links />
    </div> /* end of skyline */
  );
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, { showLinks, showPort, showAccounts })(
  Skyline
);
