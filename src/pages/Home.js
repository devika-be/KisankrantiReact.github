import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
	    return (
		    <div>
                   <div>
        <nav className="navbar navbar-default navbar-expand-lg" role="navigation-demo">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-translate">
              <h3 className="title text-center"><Link to="/">Kisankranti</Link></h3>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">

                <Link to="/Login" className="btn btn-success btn-raised btn-round " data-toggle="dropdown" >Login </Link>

                <Link to="/Register" className="btn btn-success btn-raised btn-round " data-toggle="dropdown" >Register </Link>

                <Link to="/Sell" className="btn btn-info btn-raised btn-round " data-toggle="dropdown" >Sell Products </Link>

              </ul>
            </div>{/* /.navbar-collapse */}
          </div>{/* /.container*/}
        </nav>
        <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: 'url("assets/img/1-home.jpg")'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="brand text-center">
                  <h1 className="title text-center">Kisankranti</h1>
                  <h3 >Create just what you need for you perfect website.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <div className="section">
                <div className="container text-center">
                  <div className="row">
                    <div className="col-md-8 mx-auto text-center">
                    <div className="card-header card-header-success text-center">
                      <h3 className="card-title">All Products</h3>
                    </div>
                    </div>
                  </div>
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
export default Home;