import React, { useState, useEffect } from "react";

import "./App.css";

import SoftDev from "./SoftDev";
import { data } from "./data/data";

import { SizeMe } from "react-sizeme";

import Skyline from "./Components/Skyline.jsx";

import CarouselSpring from "./Components/CarouselSpring";
import purpleClouds from "./images/purpleClouds.png";
import Links from "./Components/Links.jsx";
import { Provider } from "react-redux";
import store from "./store";

function App(props) {
  const [linksDisplay, setLinksDisplay] = useState(true);
  const [accountsDisplay, setAccountsDisplay] = useState(true);
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[5]);
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

  if (true) {
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
    <Provider store={store}>
      <div className="App">
        <Skyline />
      </div>{" "}
      {/* end of app */}
    </Provider>
  );
}

export default App;
