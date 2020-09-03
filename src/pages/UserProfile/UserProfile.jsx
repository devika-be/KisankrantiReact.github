import React from "react";
import "./UserProfile.scss";

function UserProfile() {
  return (
    <div>
      <div>
        <div style={{ backgroundImage: 'url("assets/img/selling page.jpg")' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-10 mx-auto">
                <div className="card card-login">
                  <form className="form">
                    <div className="card-header card-header-success text-center">
                      <h4 className="card-title">Update Profile</h4>
                    </div>
                    <div className="card-body">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Product Description"
                        />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address  "
                        />
                      </div>
                      {/*Address */}
                      <div className="d-flex flex-row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text"></span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text"></span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="State"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Aadhar card number"
                        />
                      </div>

                      {/*Bank Details */}
                      <div className="d-flex flex-row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text"></span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bank Account Number"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text"></span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Account Holder Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"></span>
                        </div>
                        <label htmlFor="contactform-upload">
                          Upload Profile Photo:
                        </label>
                        <br />
                        <input
                          id="contactform-upload"
                          type="file"
                          name="contactform-upload[]"
                          multiple
                          className="file file-loading"
                          data-show-preview="false"
                        />
                      </div>

                      <div id="checkRadios1">
                        {/* <div class="row"> */}

                        <div id="checkRadios2">
                          {/* <div class="row"> */}
                          <div className="col-lg-6 col-md-4 col-sm-5">
                            <div className="form-check">
                              <label>Status:</label>
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                                Seller
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                                Buyer
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                />
                                Both
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                            </div>
                          </div>

                          <div id="checkRadios3">
                            {/* <div class="row"> */}

                            <div id="checkRadios4">
                              {/* <div class="row"> */}
                              <label className="ml-4 mt-5">
                                Tell us about your farm:
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"></span>
                                </div>

                                <textarea className=" tell-us" />
                              </div>

                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text"></span>
                                </div>
                              </div>
                            </div>
                            <div className="footer text-center">
                              <a
                                href="#"
                                className="btn btn-success btn-raised btn-round"
                              >
                                Submit
                              </a>
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
