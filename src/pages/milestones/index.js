import React from "react";
import Header from "../../components/header";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./milestones.css";

export default () => {
  const [percentage] = React.useState(60);

  return (
    <div className="container">
      <Header componentName="Milestones" />
      <br />
      <div className="row">
        <div className="col-sm height-60">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>
    </div>
  );
};
