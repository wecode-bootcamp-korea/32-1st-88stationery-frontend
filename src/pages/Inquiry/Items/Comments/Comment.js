import React from "react";

function Comment({ comment, deleteHandler }) {
  return (
    <li key={comment.id}>
      <p className="writer">{comment.writer} :</p>
      <p className="detail">{comment.detail}</p>
      <p className="date">{comment.date}</p>
      <div className="commentAction">
        <button onClick={() => deleteHandler(comment.id)}>✖</button>
      </div>
    </li>
  );
}

export default Comment;
