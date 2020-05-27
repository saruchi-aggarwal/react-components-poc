import React from 'react';
import './header.css';

export default ({ componentName }) => (
  <h3 className='header'>
    <span className='asda-logo'>ASDA</span>
    {' '}{componentName}
  </h3>
);