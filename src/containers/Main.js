import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Home2 from "../pages/home/HomeComponent2.js";
// import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Education2 from "../pages/education/EducationComponent2.js";
import Experience from "../pages/experience/Experience";
import Experience2 from "../pages/experience/Experience2.js";
import Opensource from "../pages/opensource/Opensource";
import Opensource2 from "../pages/opensource/Opensource2.js";
import Contact from "../pages/contact/ContactComponent";
import Contact2 from "../pages/contact/ContactComponent2.js";
import Projects from "../pages/projects/Projects";
import Projects2 from "../pages/projects/Projects2.js";
// import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          {/* <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          /> */}
          <Route
            path="/jayanth/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/madhava/home"
            render={(props) => <Home2 {...props} theme={this.props.theme} />}
          />
          <Route
            path="/jayanth/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/madhava/experience"
            exact
            render={(props) => (
              <Experience2 {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/jayanth/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/madhava/education"
            render={(props) => (
              <Education2 {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/jayanth/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/madhava/opensource"
            render={(props) => (
              <Opensource2 {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/jayanth/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          <Route
            path="/madhava/contact"
            render={(props) => <Contact2 {...props} theme={this.props.theme} />}
          />

          {/* {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )} */}

          <Route
            path="/jayanth/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="/madhava/projects"
            render={(props) => <Projects2 {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
