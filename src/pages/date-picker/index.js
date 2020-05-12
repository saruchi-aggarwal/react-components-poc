import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/header';
import "./date-picker.css";

export default () => {
  const [startDate, handleChange] = React.useState(new Date());

  return (
    <div className="container">
      <Header componentName='Date-picker' />
      <br/>
      <div className="row">
        <div className="col-sm height-60">
          <label>Default: </label>
          <DatePicker
            selected={startDate}
            onChange={date => handleChange(date)}
            name="startDate"
            dateFormat="dd/MM/yyyy"
            className="date-picker--default"
          />
        </div>
        <div className="col-sm height-60">
          <label>Focused: </label>
          <DatePicker
            selected={startDate}
            onChange={date => handleChange(date)}
            name="startDate"
            dateFormat="dd/MM/yyyy"
            className="date-picker--default date-picker--focus"
          />
        </div>
        <div className="col-sm height-60">
          <label>Hovered: </label>
          <DatePicker
            selected={startDate}
            onChange={date => handleChange(date)}
            name="startDate"
            dateFormat="dd/MM/yyyy"
            className="date-picker--default date-picker--hover"
          />
        </div>
        <div className="col-sm height-60">
          <label>Error: </label>
          <DatePicker
            selected={startDate}
            onChange={date => handleChange(date)}
            name="startDate"
            dateFormat="dd/MM/yyyy"
            className="date-picker--default date-picker--error"
          />
        </div>
      </div>
    </div>
  );
};