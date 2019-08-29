import React, { Component } from "react";
import Grid from "../common/layout/grid";
import { Field } from "redux-form";
import Input from "../common/form/input";

class CreditList extends Component {
  // renderiza linhas da tabela
  renderRows() {
    return (
      <tr>
        <td>
          <Field
            name="credits[0].name"
            component={Input}
            placeholder="Informe o nome"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name="credits[0].value"
            component={Input}
            placeholder="Informe o valor"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <td>
            <button
              className="btn btn-warning"
              // onClick={() => this.props.showUpdate(bc)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger"
              // onClick={() => this.props.showDelete(bc)}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </td>
        </td>
      </tr>
    );
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
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}
export default CreditList;
