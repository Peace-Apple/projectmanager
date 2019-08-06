import React from 'react';
import { Link } from 'react-router-dom';

//statesless components

export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header ">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/">User</Link>
            </li>
            <li>
              <Link to="/addproject">Add Project</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
