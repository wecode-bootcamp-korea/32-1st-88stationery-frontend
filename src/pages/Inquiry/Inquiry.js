import React from "react";
import "./Inquiry.scss";

const inquiry = () => {
  return (
    <div className="inquiryContainer">
      <header>
        <h1>1:1문의 내역</h1>
        <button className="writeInquiry">1:1문의하기</button>
      </header>
      <div className="inquiryContent">
        <div className="inquiryItem">
          <div itemTop>
            <h1>글제목</h1>
            <ul>
              <li>작성자</li>
              <li>작성일자</li>
            </ul>
          </div>
          <div className="itemMain">
            <p>글내용</p>
          </div>
          <div className="itemBottom">
            <ul>
              <li>
                댓글내용 <button>답글</button>
                <button>삭제</button>
              </li>
            </ul>
          </div>
          <div className="commentInput">
            <form action="">
              <input type="text" /> <button>게시</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default inquiry;
