import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
   <ul>
    <li>
      <Link to="/" className="a"> Home </Link>
    </li>
    <li>
      <Link to="/" className="a"> Menu </Link>
    </li>
    <li>
      <Link to="/" className="a"> Login </Link>
    </li>
    <li>
      <Link to="/" className="a"> Reservation </Link>
    </li>
   </ul>
  );
}

export default Nav;