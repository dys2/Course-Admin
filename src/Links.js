import React from 'react';
import {Link} from 'react-router-dom';

import './Links.css';

export default function() {
  return (
    <div className="links-container">
      <Link to="account"><div><p>Account</p></div></Link>
      <Link to="new-course"><div><p>New Course</p></div></Link>
    </div>
  )
}