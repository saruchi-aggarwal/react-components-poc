import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDaysElapsedSinceJoining } from "../dataUtils";

export default () => {
  const [days] = React.useState(getDaysElapsedSinceJoining());
  return (
    <div className="info-box message">
      <div className="row align-items-center">
        <div className="col-sm-2 padding-5">
          <CircularProgressbar
            value={days}
            text={`${days}/60`}
            minValue={1}
            maxValue={60}
            strokeWidth={12}
          />
        </div>
        <div className="col-sm-10">
          <h6>
            It's been {getDaysElapsedSinceJoining()} days since you've been a
            member
          </h6>
          <span>Complete 3 months with us to unlock benefits</span>
          {/* <span>Upcoming Anniversary in {daysToNextAnniversary()} days</span> */}
        </div>
      </div>
    </div>
  );
};
