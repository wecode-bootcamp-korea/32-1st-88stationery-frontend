import React, { useState } from "react";
import "./Inquiry.scss";

const inquiry = () => {
  const [itemBtn, setItemBtn] = useState("0");

  return (
    <div className="inquiryContainer">
      <header>
        <h1>1:1문의 내역</h1>
        <button className="writeInquiry">1:1문의하기</button>
      </header>

      <div className="inquiryContent">
        <div className="inquiryItem">
          <div className="itemTop">
            <h1>글제목 : 상품이 불량</h1>
            <ul>
              <li>작성자 : 전형준 </li>
              <li>작성일자 : 2022-04-27</li>
            </ul>
            <button className="itemOnOff">✅</button>
          </div>
          <div className="itemHide">
            <div className="itemMain">
              <p>
                글내용 : 오늘 배송받은 물품이 어쩌구 저쩌구 주절 주절 ... 😣
              </p>
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
                <input type="text" placeholder="내용을 입력하세요." />{" "}
                <button>💬</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="inquiryPop">
        <h1>1:1 문의 작성</h1>
        <div className="popInput">
          <form action="">
            <input type="text" placeholder="문의제목" />
            <p>ℹ 문의 제목을 꼭 입력해주세요.</p>
            <textarea
              className="popInputLong"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="문의 내용을 입력해주세요 (1,000자 이내)"
            />
            <p>ℹ 문의 내용을 꼭 입력해주세요.</p>
            <input type="text" placeholder="이메일" />
            <button type="submit" className="popInputBtn" disabled>
              문의하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default inquiry;
