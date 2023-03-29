import React from "react";

import LogoLight from "../../../assets/img/logo-light.png";
import LogoDark from "../../../assets/img/logo-dark.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../services/AuthService";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <header className="header-one">
      <div id="header-main-menu" className="header-main-menu header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-3 col-sm-4 col-4 possition-static">
              <div className="site-logo-mobile">
                <a href="index.html" className="sticky-logo-light">
                  <img src={LogoLight} alt="Site Logo" />
                </a>
                <a href="index.html" className="sticky-logo-dark">
                  <img src={LogoDark} alt="Site Logo" />
                </a>
              </div>
              <nav className="site-nav">
                <ul id="site-menu" className="site-menu">
                  <li>
                    <Link to="/">
                      <a>Inicio</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="recipes">
                      <a>Recetas</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="categories">
                      <a>Categor&iacute;as</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="communities">
                      <a>Comunidades</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 col-md-9 col-sm-8 col-8 d-flex align-items-center justify-content-end">
              <div className="nav-action-elements-layout1">
                <ul>
                  <li>
                    <a
                      className="fill-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(logout(currentUser.id))}
                    >
                      <i className="flaticon-profile"></i>
                      {`${currentUser.first_name} ${currentUser.last_name}`}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mob-menu-open toggle-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-none d-lg-block">
              <div className="site-logo-desktop">
                <a href="index.html" className="main-logo">
                  <img src={LogoDark} alt="Site Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
