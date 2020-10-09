import React from "react";
import node from "../images/node.png";
import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import reactLogo from "../images/reactLogo.png";
import mongoDB from "../images/mongoDB.png";
import express from "../images/express.png";
import vueLogo from "../images/vueLogo.png";

export default function Skills() {
  return (
    <div>
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
    </div>
  );
}
