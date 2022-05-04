/* eslint-disable */

import { config } from "../../../config";
import React, { useEffect, useState } from "react";
import Comment from "./Comments/Comment";

function ItemsComment({ id, text, btnValue }) {
  const [comment, setComment] = useState();
  const [depend, setDepend] = useState("");
  const [inputComments, setInputComments] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${config.answer}`, {
      headers: { Authorization: token },
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setComment(data.result);
      });
  }, [depend]);

  const inputHandler = e => {
    setInputComments(e.target.value);
  };

  const enterCatch = e => {
    if (e.key === "Enter") {
      inputBtn();
    }
  };

  const deleteHandler = id => {
    fetch("http://10.58.1.19:8000/questions/answer", {
      method: "DELETE",
      headers: { Authorization: token },
      body: JSON.stringify({
        answer_id: id,
      }),
    }).then(res => {
      setDepend(res);
    });
  };

  const inputBtn = e => {
    e.preventDefault();

    fetch(`${config.answer}`, {
      method: "POST",
      headers: { Authorization: token },
      body: JSON.stringify({
        detail: inputComments,
        question_id: id,
      }),
    })
      .then(response => response.json())
      .then(data => setDepend(data));
    setInputComments("");
  };

  return (
    btnValue && (
      <div className="itemHide">
        <div className="itemMain">
          <p>{text}</p>
        </div>

        <div className="itemBottom">
          <ul>
            {comment &&
              comment.map(
                comment =>
                  comment.question_id === id && (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      deleteHandler={deleteHandler}
                    />
                  )
              )}
          </ul>
        </div>

        <div className="commentInput">
          <form onKeyDown={enterCatch}>
            <input
              type="text"
              placeholder="내용을 입력하세요."
              onChange={inputHandler}
              value={inputComments}
            />
            <button type="submit" onClick={inputBtn}>
              💬
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default ItemsComment;
