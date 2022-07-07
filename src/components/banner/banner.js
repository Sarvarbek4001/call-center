import React from "react";
import "./banner.scss";
import Checkmark from "../checkmark/checkmark";
function Banner(props) {
  return (
    <section className="banner">
      <div className="banner__section container">
        {props.banner &&
          props.banner.map((item, index) => (
            <div className="banner__items" key={index}>
              <Checkmark>
                <i className="bi bi-check-circle-fill"></i>
              </Checkmark>
              <p className="banner__text">{item.banner_title}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Banner;
