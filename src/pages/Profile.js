import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Profile extends Component {
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

          <Link to="/Register" className="btn btn-success btn-raised btn-round " data-toggle="dropdown" >Register </Link>

          <Link to="/Sell" className="btn btn-info btn-raised btn-round " data-toggle="dropdown" >Sell Products </Link>
              </ul>
            </div>
          </div>
        </nav>
            
        <div className="section section-sell page-header" style={{backgroundImage: 'url(#)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10 mx-auto">
              <div className="card card-login">
                <form className="form">
                  <div className="card-header card-header-success text-center">
                    <h4 className="card-title">Profile From</h4>
                  </div>
                </form></div>
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
export default Profile;