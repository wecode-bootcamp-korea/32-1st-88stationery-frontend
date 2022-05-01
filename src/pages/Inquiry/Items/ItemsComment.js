import React, { useEffect, useState } from "react";
import Comment from "./Comments/Comment";

function ItemsComment({ id, text, btnValue }) {
  const [comments, setComments] = useState([]);
  const [inputComments, setInputComments] = useState("");
  const [counter, setCounter] = useState(3);

  const inputHandler = e => {
    setInputComments(e.target.value);
  };

  const enterCatch = e => {
    if (e.key === "Enter") {
      inputBtn();
    }
  };

  const deleteHandler = id => {
    setComments(
      comments.filter(comment => {
        return comment.id !== id;
      })
    );
  };

  const inputBtn = e => {
    e.preventDefault();
    setCounter(counter + 1);
    const copyComments = [...comments];
    copyComments.push({
      id: counter,
      user: "담당자",
      text: inputComments,
    });
    setComments(copyComments);
    setInputComments("");
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
        <div className="itemBottom">
          <ul>
            {comments.map(comment => (
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
