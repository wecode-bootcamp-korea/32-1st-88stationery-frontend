import React, { useEffect, useState } from "react";
import Comments from "./Comments/Comments";

function ItemsComment({ text, btnValue }) {
  const [comments, setComments] = useState([]);
  const [inputComments, setInputComments] = useState("");

  const inputHandler = e => {
    e.preventDefault();
    setInputComments(e.target.value);
    console.log(inputComments);
  };

  useEffect(() => {
    fetch("/data/comments.json")
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);

  return (
    btnValue && (
      <div className="itemHide">
        <div className="itemMain">
          <p>{text}</p>
        </div>

        <Comments comments={comments} />

        <div className="commentInput">
          <form action="">
            <input
              type="text"
              placeholder="내용을 입력하세요."
              onChange={inputHandler}
            />
            <button type="submit">💬</button>
          </form>
        </div>
      </div>
    )
  );
}

export default ItemsComment;
