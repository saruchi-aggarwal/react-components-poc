import React from "react";
import Header from "../../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ColleagueInfo,
  DaysToAnniversary,
  HappyAnniversary,
  ActiveServices,
} from "./components";
import "./milestones.css";

const Items = [
  "Personal details",
  "Sign in details",
  "Address & phone book",
  "Wallet"
];

export default () => {
  return (
    <div className="container">
      <Header componentName="Milestones" />
      <div className="row justify-content-center co-account">
        <div className="col-sm-12 align-self-start co-account__title">
          Account Settings
        </div>
        <div className="col-sm-12 co-account__description">
          Select a section below to see and edit your details
        </div>
        <ColleagueInfo />
        <DaysToAnniversary />
        <HappyAnniversary />
        <ActiveServices />
        {Items.map(item => (
          <div className="panel row align-items-center justify-content-between">
            <div>
              <span className="panel-text">{item}</span>
            </div>
            <div className="panel-btn">View</div>
          </div>
        ))}
      </div>
    </div>
  );
};
