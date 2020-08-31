import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./NavBar/Header";
import Products from "./Products/Products";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className="page-header header-filter"
            data-parallax="true"
            style={{
              backgroundImage: 'url("assets/img/1-home.jpg")',
              height: "300px",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <div className="brand text-center">
                    <h1 className="title text-center">Kisankranti</h1>
                    <h3>
                      {" "}
                      Connecting Farmers, Customers, Wholesalers & Retailers on
                      a common digital platform.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**
           * 
           * 
           * 
           *  <div className="main main-raised">
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
           * 
           */}
          <Products />
        </div>
      </div>
    );
  }
}
export default Home;
