import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

  
  return (
    <nav><h3>Seasons</h3>
    <ul className="navlinks">
     <Link to ='/Spring'> 
     <li> Spring </li> 
     </Link> 
     <Link to ='/Summer'> 
     <li> Summer </li> 
     </Link> 
     <Link to ='/Fall'> 
     <li> Fall </li> 
     </Link> 
    </ul>
    </nav>
  );
}

export default Nav;