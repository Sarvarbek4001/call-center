import React from "react";
import "./Order.scss";
import Form from "../form/Form";
import Checkmark from "../checkmark/checkmark";

function Order() {
  return (
    <div className="order">
      <div className="order__section container">
        <div className="order__items animation1">
          <h1 className="order__heading ">
            Call center software for support and sales
          </h1>
          <p className="order__paragraph">
            Cut down resolution time for inbound customer support calls and win
            more sales deals with CloudTalk-the best-rated cloud call center
            software for SMB in 2022.
          </p>
          <Checkmark>
            <i className="bi bi-check2"></i>No credit card required
          </Checkmark>
        </div>
        <div className="form__section ">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Order;
