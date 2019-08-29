import React, { Component } from "react";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
// ACTIONS
import { init } from "../billingCycle/billingCycleActions";

// CUSTOM COMPONENTS
import CreditList from "./creditList";
import labelAndInput from "../common/form/labelAndInput";
import Row from "../common/layout/row";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form action="" role="form" onSubmit={handleSubmit}>
        <Row>
          <div className="box-body">
            <Field
              readOnly={readOnly}
              name="name"
              component={labelAndInput}
              label="Nome"
              cols="12 4"
              placeholder="Informe o nome"
            />
            <Field
              readOnly={readOnly}
              name="month"
              component={labelAndInput}
              label="Mês"
              cols="12 4"
              placeholder="Inform o mês"
              type="number"
            />
            <Field
              readOnly={readOnly}
              name="year"
              component={labelAndInput}
              label="Ano"
              cols="12 4"
              placeholder="Informe o ano"
              type="number"
            />

            <CreditList cols="12 6" />
          </div>
        </Row>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCycleForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(BillingCycleForm);
