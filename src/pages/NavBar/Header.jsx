import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header({ isLoggedIn }) {
  return (
    <div>
      <nav
        className="navbar navbar-default navbar-expand-lg"
        role="navigation-demo"
      >
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-translate">
            <h3 className="title text-center">
              <Link to="/">Kisankranti</Link>
            </h3>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn ? (
                <div>
                  <Link
                    to="/Login"
                    className="btn btn-success btn-raised btn-round "
                    data-toggle="dropdown"
                  >
                    Login{" "}
                  </Link>

                  <Link
                    to="/Register"
                    className="btn btn-success btn-raised btn-round "
                    data-toggle="dropdown"
                  >
                    Register{" "}
                  </Link>
                </div>
              ) : null}

              <Link
                to="/Sell"
                className="btn btn-info btn-raised btn-round "
                data-toggle="dropdown"
              >
                Sell Products{" "}
              </Link>

              <i className="far fa-user-circle float-right ml-4"></i>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container*/}
      </nav>
    </div>
  );
}
export default Header;
