import React from "react";
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/date-picker">DatePicker</Link>
        </li>
        <li>
          <Link to="/milestones">Milestones</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default App;
