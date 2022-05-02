import React, { useEffect, useState } from "react";
import Comment from "./Comments/Comment";

function ItemsComment({
  id,
  text,
  btnValue,
  comment,
  setComment,
  deleteHandler,
}) {
  const [inputComments, setInputComments] = useState("");
  // const [counter, setCounter] = useState(3);
  const token = localStorage.getItem("token");

  const inputHandler = e => {
    setInputComments(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const enterCatch = e => {
    if (e.key === "Enter") {
      // inputBtn();
    }
  };

  const inputBtn = e => {
    e.preventDefault();
    setInputComments(prev => [...prev, inputComments]);
    // setInputComments(prev => [...prev, inputComments]);
    fetch("http://10.58.7.20:8000/questions/answer", {
      method: "POST",
      headers: { Authorization: token },
      body: JSON.stringify({
        detail: inputComments,
        question_id: inputComments.question_id,
      }),
    })
      .then(response => console.log(response))
      .then(result => console.log(result));
  };

  console.log(inputComments);

  return (
    btnValue && (
      <div className="itemHide">
        <div className="itemMain">
          <p>{text}</p>
        </div>
        <div className="itemBottom">
          <ul>
            {comment &&
              comment.map(comment => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  deleteHandler={deleteHandler}
                />
              ))}
          </ul>
        </div>
        <div className="commentInput">
          <form action="" onKeyDown={enterCatch}>
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
