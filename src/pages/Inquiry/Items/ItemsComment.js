import React, { useEffect, useState } from "react";
import Comments from "./Comments/Comments";

function ItemsComment({ text, btnValue }) {
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   fetch("/data/Comments.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       setComments(data);
  //     });
  // }, []);

  console.log(comments);

  return (
    btnValue && (
      <div className="itemHide">
        <div className="itemMain">
          <p>{text}</p>
        </div>

        <Comments />

        <div className="commentInput">
          <form action="">
            <input type="text" placeholder="내용을 입력하세요." />
            <button>💬</button>
          </form>
        </div>
      </div>
    )
  );
}

export default ItemsComment;
