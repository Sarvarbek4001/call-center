import React, { useState, useRef, useEffect, useContext } from "react";
import Modal from "../modal/modal";
import "./addBlockModal.scss";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import BlockContext from "../../context/SingleBlock";
function AddBlockModal(props) {
  const ctx = useContext(BlockContext);
  const sectionId = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const titleChangeHandler = (evt) => {
    setTitle(evt.target.value);
  };
  const contentChangeHandler = (evt) => {
    setContent(evt.target.value);
  };
  const checkboxHandler = (evt) => {
    setIsChecked(evt.target.checked);
  };
  useEffect(() => {
    if (title.length !== 0 && content.length !== 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [title, content]);
  const submitHandler = async (evt) => {
    evt.preventDefault();
    try {
      ctx.setIsLoading(true);
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          title: title,
          content: content,
          section_id: sectionId.current.value,
          b_row_reverse: isChecked,
        }),
      };
      const response = await fetch(
        `${process.env.REACT_APP_HOST}/block`,
        requestOptions
      );
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        ctx.setIsLoading(false);
        props.hideAddBlockModal();
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Modal onHideCart={props.hideAddBlockModal}>
      <div className="add__block-modal">
        <form onSubmit={submitHandler}>
          <div className="form__block-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form__block-control">
            <textarea placeholder="Content" onChange={contentChangeHandler} />
          </div>
          <div className="row__rewerse">
            <FormControlLabel
              label={
                <Typography
                  variant="h4"
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  Row-rewerse
                </Typography>
              }
              control={
                <Checkbox
                  onChange={checkboxHandler}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                      color: "#000051",
                    },
                  }}
                />
              }
            />
          </div>
          <div className="form__block-control block-control ">
            <select ref={sectionId}>
              <option value="1">Section1</option>
              <option value="2">Section2</option>
            </select>
            <div className="add__block-btn">
              <button
                disabled={!isFormValid}
                className={`${isFormValid === true ? "btn-truth" : ""}`}
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
        <div className="exist">
          <button type="btn" onClick={props.hideAddBlockModal}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddBlockModal;
