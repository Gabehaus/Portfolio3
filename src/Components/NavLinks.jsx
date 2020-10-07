import React from "react";
import { connect } from "react-redux";
import { showLinks, showPort, showAccounts } from "../actions/homeActions.js";

function NavLinks(props) {
  return (
    <ul
      className={props.home.showLinks ? "fade-links-in" : "fade-links-out"}
      id="link-wrapper"
    >
      <button
        className="link coloredLink"
        onClick={() => {
          props.showLinks();
          props.showPort();
          props.showAccounts();
        }}
      >
        PROJECTS
      </button>
      <button className="link blackLink ">SKILLS</button>
      <button className="link blackLink">CONTACT</button>
      <button className="link coloredLink">RESUME</button>
    </ul>
  );
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, { showLinks, showPort, showAccounts })(
  NavLinks
);
