import React from "react";
import { Link } from "react-router-dom";

import { useInput } from "./UserInput";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Login({ setLoggedInStatus }) {
  const history = useHistory();
  const {
    value: phoneNumber,
    bind: bindPhoneNumber,
    reset: resetPhoneNumber,
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const notify = () => toast.success("Welcome David !");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const url = "https://kisankranti.herokuapp.com/apiv1/login";
    const req = {
      phoneNumber,
      password,
    };

    axios
      .post(url, req)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.error);

        if (!response.data.error) {
          setLoggedInStatus();
          notify();
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    resetPhoneNumber();
    resetPassword();
  };
  return (
    <div>
      <div>
        <div
          className="section section-signup page-header"
          style={{ backgroundImage: 'url("./assets/img/3-home.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mx-auto">
                <div className="card card-login">
                  <form onSubmit={handleSubmit} className="form">
                    <div className="card-header card-header-success text-center">
                      <h4 className="card-title">Login To Kisankranti</h4>
                      <div className="social-line">
                        <a href="" className="btn btn-just-icon btn-link">
                          <i className="fa fa-facebook-square" />
                        </a>

                        <a href="" className="btn btn-just-icon btn-link">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
    
                    
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group has-success">
                          <label htmlFor="exampleInput" className="bmd-label-floating">Mobile Number</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>


                      <div className="col-lg-12 col-sm-2">
                        <div className="form-group has-success">
                          <label htmlFor="exampleInput" className="bmd-label-floating">Password</label>
                          <input type="password" className="form-control" autoComplete />
                        </div>
                      </div>
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text"></span>
//                         </div>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Mobile Number"
//                           {...bindPhoneNumber}
//                         />
//                       </div>
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text"></span>
//                         </div>
//                         <input
//                           type="password"
//                           className="form-control"
//                           placeholder="Password"
//                           {...bindPassword}
//                         />
//                       </div>
                      <div className="input-group"></div>
                      <div className="footer text-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-raised btn-round"
                        >
                          Log in
                        </button>
                      </div>

                      <br />
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
export default Login;
