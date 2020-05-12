import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

  
  return (
    <nav><h3>Favorite Artists</h3>
    <ul className="navlinks">
     <Link to ='/Spring'> 
     <li> Bon Iver </li> 
     </Link> 
     <Link to ='/Summer'> 
     <li> Alexi_Murdoch </li> 
     </Link> 
     <Link to ='/Fall'> 
     <li> Moses_Sumney </li> 
     </Link> 
    </ul>
    </nav>
  );
}

export default Nav;