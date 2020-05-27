import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import celebrationImage from "../assets/bottle.png";

export default () => {
  const [isPanelOpen, openPanel] = React.useState(false);
  return (
    <Fragment>
      <div className={`col-sm-12 info-box message ${
          isPanelOpen ? "remove-margins" : ""
        }`}>
        <div className="row align-items-center">
          <div className="col-sm-2">
            <img src={celebrationImage} alt="" className="celebration-image" />
          </div>
          <div className="col-sm-8">
            <h6>It's your ASDA anniversary!</h6>
            <span classname="secondary-text">
              We are happy to be a part of your life
            </span>
          </div>
          <div
            className="col-sm-2 panel-btn"
            onClick={() => openPanel(!isPanelOpen)}
          >
            {isPanelOpen ? "Close" : "View"}
          </div>
        </div>
      </div>
      {isPanelOpen && (
        <div className="col-sm-12 more-info-box">You joined 3 years ago today!</div>
      )}
    </Fragment>
  );
};
