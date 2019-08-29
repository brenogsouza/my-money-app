import React, { Component } from "react";

// REDUX FORM
import { Field, arrayInsert } from "redux-form";

// CUSTOM COMPONENTS
import Grid from "../common/layout/grid";
import Input from "../common/form/input";

// REDUX
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CreditList extends Component {
  // adiciona um registro se não for somente leitura
  add(index, item = {}) {
    if (!this.props.readOnly) {
      // id do formulário, nome do field, index para inserir elemento, e o valor
      this.props.arrayInsert("billingCycleForm", "credits", index, item);
    }
  }

  // renderiza linhas da tabela
  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`credits[${index}].name`}
            component={Input}
            placeholder="Informe o nome"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`credits[${index}].value`}
            component={Input}
            placeholder="Informe o valor"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.add(index + 1)}
            >
              <i className="fa fa-plus"></i>
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.add(index + 1, item)}
            >
              <i className="fa fa-clone"></i>
            </button>
          </td>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ arrayInsert }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CreditList);
