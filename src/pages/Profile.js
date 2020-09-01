import React, { Component } from "react";
import { Link } from "react-router-dom";
class Profile extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className="section section-sell page-header"
            style={{ backgroundImage: "url(#)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-10 mx-auto">
                  <div className="card card-login">
                    <form className="form">
                      <div className="card-header card-header-success text-center">
                        <h4 className="card-title">Profile From</h4>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-default bg-white">
            <div className="container">
              <nav className="float-left">
                <ul>
                  <li>
                    <a href="Home.html">Kisankranti</a>
                  </li>
                </ul>
              </nav>
              <div className="copyright float-right">
                Copyrights © 2020 All Rights Reserved by Kisankranti
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Profile;
