import React, { useContext, useState, useEffect, useRef } from "react";
import Modal from "../modal/modal";
import BlockContext from "../../context/SingleBlock";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import "./singleBlockModal.scss";
function SingleBlockModal() {
  const ctx = useContext(BlockContext);

  const [title, setTitle] = useState(ctx.data.title);
  const [content, setContent] = useState(ctx.data.content);
  const [isChecked, setIsChecked] = useState(ctx.data.b_row_reverse);
  const titleChangeHandler = (evt) => {
    setTitle(evt.target.value);
  };
  const contentChangeHandler = (evt) => {
    setContent(evt.target.value);
  };
  const checkboxHandler = (evt) => {
    setIsChecked(evt.target.checked);
  };
  const submitHandler = async (evt) => {
    evt.preventDefault();
    try {
      ctx.setIsLoading(true);
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          title: title,
          content: content,
          b_row_reverse: isChecked,
          blockId: ctx.data.block_id,
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
        ctx.hideModal();
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Modal onHideCart={ctx.hideModal}>
      <div className="single__block-modal">
        <form onSubmit={submitHandler}>
          <div className="single__block-control">
            <input
              type="text"
              onChange={titleChangeHandler}
              defaultValue={ctx.data.title}
            />
          </div>
          <div className="single__block-control">
            <textarea
              onChange={contentChangeHandler}
              defaultValue={ctx.data.content}
            />
          </div>
          <div className="row__rewerse">
            <FormControlLabel
              label={
                <Typography
                  variant="h4"
                  style={{
                    color: "black",
                    fontSize: 16,
                  }}
                >
                  Row-rewerse
                </Typography>
              }
              control={
                <Checkbox
                  onChange={checkboxHandler}
                  defaultChecked={ctx.data.b_row_reverse}
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
          <div className="single__block-btn">
            <button type="submit">Save</button>
          </div>
        </form>
        <div className="exist">
          <button type="btn" onClick={ctx.hideModal}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SingleBlockModal;
