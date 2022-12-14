import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Ylatunniste = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3  ">
      <div className="container ">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Alkuun
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/puhelintieto/lisaa" className="nav-link">
                Lisää urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tietoa" className="nav-link">
                Tietoa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Ylatunniste.propTypes = {
  //turvataso: PropTypes.string.isRequired,
};
export default Ylatunniste;
