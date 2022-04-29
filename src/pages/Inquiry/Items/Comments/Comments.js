function Comments({ comments }) {
  return comments.map(({ id, user, text }) => (
    <div className="itemBottom">
      <ul>
        <li key={id}>
          <span>
            {user} : {text}
          </span>
          <div className="commentAction">
            <button>🗨</button>&nbsp;
            <button>✖</button>
          </div>
        </li>
      </ul>
    </div>
  ));
}

export default Comments;
