import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class OTP extends Component {
    render() {
	    return (
		    <div>
               <div>
        <div className="section section-signup page-header" style={{backgroundImage: 'url("./assets/img/3-home.jpg")'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mx-auto">
                <div className="card card-login">
                  <form className="form">
                    <div className="card-header card-header-success text-center">
                      <h4 className="card-title">Register To Kisankranti</h4>
                    </div>
                    <div className="card-body">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Verification Code/OTP" />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                          </span>
                        </div>
                        <input type="password" className="form-control" placeholder="Enter New Password" autoComplete />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                          </span>
                        </div>
                        <input type="password" className="form-control" placeholder="Confirm Password" autoComplete />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="footer text-center">
                      <a href="#" className="btn btn-success btn-raised btn-round">Register</a>
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
}
export default OTP;
