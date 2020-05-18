import React from "react";
import Header from "../../components/header";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getDaysElapsedSinceJoining, daysToNextAnniversary } from "./dataUtils";
import "./milestones.css";

export default () => {
  const [days] = React.useState(getDaysElapsedSinceJoining());

  return (
    <div className="container">
      <Header componentName="Milestones" />
      <br />
      <div className="row">
        <div className="col-sm-2">
          <CircularProgressbar
            value={days}
            text={`${days} days`}
            minValue={1}
            maxValue={365}
          />
        </div>
        <div className="col-sm-6">
          <span>
            It has been {getDaysElapsedSinceJoining()} days since you've been a
            member
          </span>
          <br />
          <span>Upcoming Anniversary in {daysToNextAnniversary()} days</span>
        </div>
      </div>
    </div>
  );
};
