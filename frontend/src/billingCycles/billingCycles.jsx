import React, { Component } from "react";
//CUSTOM COMPONENTS
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

class BillingCycles extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>Ciclos de Pagamentos</Content>
      </div>
    );
  }
}
export default BillingCycles;
