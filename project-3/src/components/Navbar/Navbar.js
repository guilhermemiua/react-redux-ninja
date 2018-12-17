import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          Poke's Times
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <Link to="/About"> About </Link>
          </li>
          <li>
            <Link to="/Contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
