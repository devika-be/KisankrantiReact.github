import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Sell from "./pages/Sell";
import Profile from "./pages/Profile/Profile";
import Header from "./pages/NavBar/Header";
import Footer from "./pages/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./pages/UserProfile/UserProfile";
class App extends Component {
  state = {
    isLoggedIn: false,
    isHidden: true,
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
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
          <Header
            isLoggedIn={this.state.isLoggedIn}
            isHidden={this.state.isHidden}
            toggleHidden={this.toggleHidden}
          />
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
            <Route path="/userprofile" component={UserProfile} />
          </Switch>
          <ToastContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
