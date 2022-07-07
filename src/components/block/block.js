import React from "react";
import "./block.scss";
import Button from "../button/button";
import Checkmark from "../checkmark/checkmark";
function Block(props) {
  return (
    <>
      {props.block.map((item, index) => (
        <section className="block" key={index}>
          <div
            className={`block__section container ${
              item.b_row_reverse === true ? "flex-direction" : null
            }`}
          >
            <div className="block__section-img ">
              <img
                src={`${process.env.REACT_APP_HOST}/blockImage/${item.block_id}`}
                width={594}
              />
            </div>
            <div className="block__section-items ">
              <h3 className="block__section-heading">{item.title}</h3>
              <p className="block__section-text">{item.content}</p>
              <div className="block__section-btn">
                <Button type="button">TRY CLOUDTALK IVR</Button>
              </div>
              <Checkmark>
                <i className="bi bi-check2"></i>No credit card required
              </Checkmark>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Block;
