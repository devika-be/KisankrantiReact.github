import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Sell from "./pages/Sell";
import Profile from "./pages/Profile";
import Header from "./pages/NavBar/Header";
import Footer from "./pages/Footer/Footer";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  setLoggedInStatus = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/Login"
              component={() => (
                <Login
                  isLoggedIn={this.state.isLoggedIn}
                  setLoggedInStatus={this.setLoggedInStatus}
                />
              )}
            />
            <Route path="/Register" component={Register} />
            <Route path="/OTP" component={OTP} />
            <Route path="/Sell" component={Sell} />
            <Route path="/Profile" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
