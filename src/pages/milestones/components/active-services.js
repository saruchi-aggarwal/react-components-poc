import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { activeServices } from "../dataUtils";

import asdaGhs from "../assets/asda-ghs.png";
import asdaSngMobile from "../assets/sng-mobile.png";
import asdaSngKiosk from "../assets/sng-kiosk.png";
import asdaGeorge from "../assets/asdaGeorge.png";
import asdaBtc from "../assets/baby-club.png";

const SERVICES_MAP = {
  GHS: {
    title: "Groceries",
    img: asdaGhs
  },
  George: {
    title: "George",
    img: asdaGeorge
  },
  ScanGoClassic: {
    title: "S&G Classic",
    img: asdaSngKiosk
  },
  ScanGoMobile: {
    title: "S&G Mobile",
    img: asdaSngMobile
  }
};

export default () => {
  const [isPanelOpen, openPanel] = React.useState(false);
  return (
    <Fragment>
      <div
        className={`col-sm-12 info-box active-services ${
          isPanelOpen ? "remove-margins" : ""
        }`}
      >
        <div className="row align-items-center">
          <div className="col-sm-10">
            <h6>Your active services</h6>
          </div>
          <div
            className="col-sm-2 panel-btn"
            onClick={() => openPanel(!isPanelOpen)}
          >
            {isPanelOpen ? "Close" : "View"}
          </div>
        </div>
        <div className="row row-cols-2">
          {activeServices.map(({ service }) => (
            <div className="col">
              <img
                src={SERVICES_MAP[service].img}
                alt=""
                width="50px"
                height="50px"
              />
              <span>{SERVICES_MAP[service].title}</span>
            </div>
          ))}
        </div>
      </div>
      {isPanelOpen && (
        <div className="col-sm-12 more-info-box">
          <h6>Available Services</h6>
          <div className="row row-cols-2">
            <div className="col">
              <img src={asdaBtc} alt="" width="50px" height="50px" />
              <span>Baby Club</span>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
