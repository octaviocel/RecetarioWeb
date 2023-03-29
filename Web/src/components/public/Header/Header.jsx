import React from "react";

import LogoLight from "../../../assets/img/logo-light.png";
import LogoDark from "../../../assets/img/logo-dark.png";
import Login from "../Home/Login";
import Register from "../Home/Register";

const Header = () => {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const loginOpen = () => {
    setOpenLogin(true);
  };

  const loginClose = () => {
    setOpenLogin(false);
  };

  const registerOpen = () => {
    setOpenRegister(true);
  };

  const registerClose = () => {
    setOpenRegister(false);
  };

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
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="/recipes">Recetas</a>
                  </li>
                  <li>
                    <a href="/communities">Comunidades</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 col-md-9 col-sm-8 col-8 d-flex align-items-center justify-content-end">
              <div className="nav-action-elements-layout1">
                <ul>
                  <li>
                    <button
                      type="button"
                      className="login-btn"
                      onClick={() => loginOpen()}
                    >
                      <i className="flaticon-profile"></i>Entrar
                    </button>
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

      <Login
        open={openLogin}
        handleClose={loginClose}
        handleOpenRegister={registerOpen}
      />
      <Register
        open={openRegister}
        handleClose={registerClose}
        handleOpenLogin={loginOpen}
      />
    </header>
  );
};

export default Header;
