/* eslint-disable */

import React, { useEffect, useState } from "react";
import Items from "./Items/Items";
import "./Inquiry.scss";
import { config } from "../../config";

const Inquiry = () => {
  const [inquiryInput, setInquiryInput] = useState({
    title: "",
    detail: "",
    user: "",
  });

  const [writeBtn, setWriteBtn] = useState(false);
  const [itemValue, setItemValue] = useState([]);
  const [dependency, setDependency] = useState("");

  const titleCheck = inquiryInput.title.length === 0;
  const detailCheck = inquiryInput.detail.length === 0;
  const writeBtnisvalid = !titleCheck && !detailCheck;

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${config.question}`, {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setItemValue(data.result);
      });
  }, [dependency]);

  const inputHandler = e => {
    setInquiryInput(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const actionWriteBtn = () => {
    setWriteBtn(!writeBtn);
  };

  const onSubmit = e => {
    e.preventDefault();
    setItemValue(prev => [...prev, inquiryInput]);
    fetch(`${config.question}`, {
      method: "POST",
      headers: { Authorization: token },
      body: JSON.stringify({
        title: inquiryInput.title,
        detail: inquiryInput.detail,
      }),
    })
      .then(response => response.json())
      .then(result => {
        setDependency(result);

        if (token) {
          actionWriteBtn();
        } else {
          alert("로그인 후 작성해주세요.");
          actionWriteBtn();
        }
      });
  };

  const deleteItem = id => {
    fetch("http://10.58.1.19:8000/questions/question", {
      method: "DELETE",
      headers: { Authorization: token },
      body: JSON.stringify({
        question_id: id,
      }),
    }).then(res => {
      setDependency(res);
    });
  };

  return (
    <div className="inquiryContainer">
      <header>
        <h1>1:1문의 내역</h1>
        <button className="writeInquiry" onClick={actionWriteBtn}>
          1:1문의하기
        </button>
      </header>

      {itemValue && (
        <Items
          list={itemValue}
          setItemValue={setItemValue}
          deleteItem={deleteItem}
        />
      )}
      {writeBtn && (
        <>
          <div onClick={actionWriteBtn} className="popBack" />
          <div className="inquiryPop">
            <h1>1:1 문의 작성🔔</h1>
            <div className="popInput">
              <form action="" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="문의제목"
                  onChange={inputHandler}
                  maxLength="40"
                />

                {titleCheck ? (
                  <p>ℹ 문의 제목을 꼭 입력해주세요.</p>
                ) : (
                  <p className="checkText">
                    ℹ 제목은 간결하게 작성해주시면 좋습니다. (최대40자)
                  </p>
                )}

                <textarea
                  className="popInputLong"
                  onChange={inputHandler}
                  name="detail"
                  cols="30"
                  rows="10"
                  placeholder="문의 내용을 입력해주세요 (1,000자 이내)"
                />

                {detailCheck ? (
                  <p>ℹ 문의 내용을 입력해주세요.</p>
                ) : (
                  <p className="checkText">
                    ℹ 문의사항을 자세하게 작성해주시면 좋습니다.
                  </p>
                )}

                <button
                  className={!writeBtnisvalid ? "popInputBtn" : "popInputBtnOn"}
                  type="submit"
                  disabled={!writeBtnisvalid}
                  onClick={onSubmit}
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Inquiry;
