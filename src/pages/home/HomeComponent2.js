import React, { Component } from "react";
import Header2 from "../../components/header/Header2";
import Greeting from "../../containers/greeting/Greeting2";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer2";
import TopButton from "../../components/topButton/TopButton";

class Home2 extends Component {
  render() {
    return (
      <div>
        <Header2 theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home2;
