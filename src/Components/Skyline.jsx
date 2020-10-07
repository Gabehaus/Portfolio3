import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { showLinks, showPort, showAccounts } from "../actions/homeActions.js";

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
      <Name />
      <div className="fullStackDevBox">
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
