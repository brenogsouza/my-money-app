import React from "react";
import If from "../operador/if";

export default props => (
  <If test={!props.hide}>
    <div className="from-group has-feedback">
      <input
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      />
      <span
        className={`glyphicon glyphicon-${props.icon} form-control-feedback`}
      ></span>
    </div>
  </If>
);
