import React, { useEffect, useState } from "react";
import Items from "./Items/Items";
import "./Inquiry.scss";

const Inquiry = () => {
  const [counter, setCounter] = useState(1);
  const token = localStorage.getItem("token");

  const [inquiryInput, setInquiryInput] = useState({
    id: counter,
    title: "",
    detail: "",
    email: "",
    user: "손놈",
    date: Date.now(),
  });

  const [writeBtn, setWriteBtn] = useState(false);

  const [itemValue, setItemValue] = useState();

  useEffect(() => {
    fetch("http://10.58.7.20:8000/questions/question", {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => setItemValue(data.result));
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    setItemValue(prev => [...prev, inquiryInput]);
    setCounter(counter => counter + 1);
    actionWriteBtn();

    console.log(inquiryInput);
  };

  const inputHandler = e => {
    setInquiryInput(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const deleteItem = id => {
    setItemValue(
      itemValue.filter(el => {
        return el.id !== id;
      })
    );
  };

  const actionWriteBtn = () => {
    setWriteBtn(!writeBtn);
  };

  const titleCheck = inquiryInput.title.length === 0;
  const detailCheck = inquiryInput.detail.length === 0;
  const writeBtnisvalid = !titleCheck && !detailCheck;

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
            <h1>1:1 문의 작성 😺</h1>
            <div className="popInput">
              <form action="" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="문의제목"
                  onChange={inputHandler}
                />
                {titleCheck ? (
                  <p>ℹ 문의 제목을 꼭 입력해주세요.</p>
                ) : (
                  <p className="checkText">
                    ℹ 제목은 간결하게 작성해주시면 좋습니다.
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
                <input
                  type="email"
                  placeholder="이메일 (선택사항)"
                  name="email"
                  onChange={inputHandler}
                />
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
