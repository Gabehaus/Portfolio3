import React from "react";
import linkedIn from "../images/linkedIn.png";
import freeCodeCamp from "../images/freeCodeCamp.png";
import gitHub from "../images/gitHub.png";
import { connect } from "react-redux";

function Links(props) {
  return (
    <div
      className={
        props.home.showAccounts ? "fade-accounts-in" : "fade-accounts-out"
      }
      id="accounts-wrapper"
    >
      <div className="account-holder">
        <img className="account-image" src={linkedIn}></img>
        <div>Linkedin</div>
      </div>
      <div className="account-holder">
        <img className="account-image" src={gitHub}></img>
        <div>Github</div>
      </div>

      <div className="account-holder">
        <img className="account-image" src={freeCodeCamp}></img>
        <div>freeCodeCamp</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, {})(Links);
