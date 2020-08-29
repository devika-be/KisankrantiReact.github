import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Register extends Component {
    render() {
	    return (
		    <div>
                 <div>
        <nav className="navbar navbar-default navbar-expand-lg" role="navigation-demo">
          <div className="container">
            <div className="navbar-translate">
            <h3 className="title text-center"><Link to="/">Kisankranti</Link></h3>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
           <Link to="/Login" className="btn btn-success btn-raised btn-round " data-toggle="dropdown" >Login </Link>

           <Link to="/Sell" className="btn btn-info btn-raised btn-round " data-toggle="dropdown" >Sell Products </Link>
              </ul>
            </div>{/* /.navbar-collapse */}
          </div>{/* /.container*/}
        </nav>
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
                        <input type="text" className="form-control" placeholder="First Name" />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Last Name" />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                          </span>
                        </div>
                        <input type="number" className="form-control" placeholder="Mobile Number" />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="footer text-center">
                      <Link to="/OTP" className="btn btn-success btn-raised btn-round">Send Varification Code</Link>
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
                <a href="Home.html">
                  Kisankranti
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            Copyrights © 2020 All Rights Reserved by Kisankranti
          </div></div></footer>
      </div>
            </div>  
	     );
    }
}
export default Register;