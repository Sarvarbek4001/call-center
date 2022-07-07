import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import "./updateBannerModal.scss";
function UpdateBannerModal(props) {
  const [textBanner, setTextBanner] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const changeBannerText = (evt) => {
    setTextBanner(evt.target.value);
  };

  useEffect(() => {
    if (textBanner.length ) {
      setFormIsValid(true);
      console.log(formIsValid);
    } else {
      setFormIsValid(false);
    }
  }, [textBanner]);

  const updateHandler = async (evt) => {
    evt.preventDefault();
    props.setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST}/banner`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          bannerTitle: textBanner,
          bannerId: props.bannerData.banner_id,
        }),
      });
      if (response.ok) {
        props.hideAddBanner();
        props.setIsLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Modal onHideCart={props.hideAddBanner}>
      <form className="update__banner-form" onSubmit={updateHandler}>
        <div className="update__banner-control">
          <textarea
            defaultValue={props.bannerData.banner_title}
            onChange={changeBannerText}
          />
        </div>
        <div className="banner__form-buttons">
          <button
            className={`${formIsValid === true ? "btn__valid" : ""}`}
            disabled={!formIsValid}
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      <div className="exist">
        <button type="btn" onClick={props.hideAddBanner}>
          <i className="bi bi-x"></i>
        </button>
      </div>
    </Modal>
  );
}

export default UpdateBannerModal;
