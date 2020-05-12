import React from 'react';
import './header.css';

export default ({ componentName }) => (
  <h3>
    <span className='asda-logo'>ASDA</span>
    {' '}{componentName}
  </h3>
);