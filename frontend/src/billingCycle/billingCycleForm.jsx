import React, { Component } from "react";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
// ACTIONS
import { init } from "../billingCycle/billingCycleActions";

// CUSTOM COMPONENTS
import ItemList from "./itemList";
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits } = this.props;
    return (
      <form action="" role="form" onSubmit={handleSubmit}>
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

          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Créditos"
          />
        </div>
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

// para passar o ID do formulário para passar o estado e o atributo para o form
const selector = formValueSelector("billingCycleForm");

const mapStateToProps = state => ({
  credits: selector(state, "credits")
});

// conectando minha actions
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
