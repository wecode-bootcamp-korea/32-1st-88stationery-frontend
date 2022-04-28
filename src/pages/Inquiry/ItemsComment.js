function ItemsComment({ text, btnValue }) {
  return (
    btnValue && (
      <div className="itemHide">
        <div className="itemMain">
          <p>{text}</p>
        </div>
        <div className="itemBottom">
          <ul>
            <li>
              <span>댓글내용 : 어쩔티비 ~ 🤗</span>
              <div className="commentAction">
                <button>🗨</button>&nbsp;
                <button>✖</button>
              </div>
            </li>
          </ul>
        </div>
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
