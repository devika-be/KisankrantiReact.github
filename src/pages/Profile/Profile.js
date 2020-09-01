import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../../../src/farmer.jpg";
import "./Profile.scss";
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
                        <h4 className="card-title">Profile </h4>
                      </div>
                      <div className="d-flex justify-content-center">
                        <img
                          src={ProfileImage}
                          alt="profile-image"
                          className="profile-image "
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          >
        </div>
      </div>
    );
  }
}
export default Profile;
