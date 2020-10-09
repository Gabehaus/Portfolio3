import React from "react";
import { connect } from "react-redux";
import { showLinks, showPort, showAccounts } from "../actions/homeActions.js";
import { NavLink } from "reactstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <ul
      className={props.home.showLinks ? "fade-links-in" : "fade-links-out"}
      id="link-wrapper"
    >
      <Link to="/" className="link ">
        <button
          className="linkButton coloredLink"
          onClick={() => {
            props.showLinks();
            props.showPort();
            props.showAccounts();
          }}
        >
          PROJECTS
        </button>
      </Link>

      <Link to="/skills" className="link ">
        {" "}
        <button href="/skills" className="linkButton blackLink ">
          SKILLS
        </button>
      </Link>
      <Link to="/skills" className="link  ">
        <button className="linkButton blackLink">CONTACT</button>
      </Link>
      <Link to="/skills" className="link ">
        <button className="linkButton coloredLink">RESUME</button>
      </Link>
    </ul>
  );
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, { showLinks, showPort, showAccounts })(
  NavLinks
);
