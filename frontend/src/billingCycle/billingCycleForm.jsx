import React, { Component } from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

// ACTIONS
import { init } from "../billingCycle/billingCycleActions";

// CUSTOM COMPONENTS
import ItemList from "./itemList";
import LabelAndInput from "../common/form/labelAndInput";
import Summary from "./summary";

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            readOnly={readOnly}
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
          />
          <Field
            readOnly={readOnly}
            name="month"
            component={LabelAndInput}
            label="Mês"
            cols="12 4"
            placeholder="Inform o mês"
            type="number"
          />
          <Field
            readOnly={readOnly}
            name="year"
            component={LabelAndInput}
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            type="number"
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />

          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Créditos"
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend="Débitos"
            showStatus={true}
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
  credits: selector(state, "credits"),
  debts: selector(state, "debts")
});

// conectando minha actions
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
