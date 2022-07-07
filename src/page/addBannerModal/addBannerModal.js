import React, { useState, useRef, useEffect } from "react";
import Modal from "../modal/modal";
import "./addBannerModal.scss";
function AddBannerModal(props) {
  const [titleInput, setTitleInput] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const sectionIdRef = useRef();

  useEffect(() => {
    if (titleInput.length > 15) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [titleInput]);

  const titleChangeHandler = (evt) => {
    setTitleInput(evt.target.value);
  };

  const handleSubmitBanner = async (evt) => {
    evt.preventDefault();
    props.setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST}/banner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          bannerTitle: titleInput,
          sectionId: sectionIdRef.current.value,
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
      <div className="add__modal-banner">
        <form className="banner__form" onSubmit={handleSubmitBanner}>
          <div className="banner__form-control">
            <textarea
              // type="text"
              id="bannertitle"
              placeholder="Banner Title"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="send__section">
            <select className="banner__form-select" ref={sectionIdRef}>
              <option value="1">Section1</option>
              <option value="2">Section2</option>
            </select>
            <div className="banner__form-buttons">
              <button
                disabled={!formIsValid}
                type="submit"
                className={`${formIsValid === true ? "btn__valid" : ""}`}
              >
                Save
              </button>
            </div>
          </div>
        </form>
        <div className="exist">
          <button type="btn" onClick={props.hideAddBanner}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddBannerModal;
