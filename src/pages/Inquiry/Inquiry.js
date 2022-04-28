import React from "react";
import Items from "./Items";
import "./Inquiry.scss";

const Inquiry = () => {
  // state zone

  // variable zone

  // function zone

  return (
    <div className="inquiryContainer">
      <header>
        <h1>1:1문의 내역</h1>
        <button className="writeInquiry">1:1문의하기</button>
      </header>

      <Items />

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

export default Inquiry;
