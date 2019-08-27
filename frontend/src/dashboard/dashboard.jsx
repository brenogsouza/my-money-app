import React, { Component } from "react";

// CUSTOM COMPONENTS
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>Dashboard</Content>
      </div>
    );
  }
}
export default Dashboard;
