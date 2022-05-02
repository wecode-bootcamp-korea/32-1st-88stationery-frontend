import React, { useEffect, useState } from "react";
import Items from "./Items/Items";
import "./Inquiry.scss";

const Inquiry = () => {
  const token = localStorage.getItem("token");

  const [inquiryInput, setInquiryInput] = useState({
    title: "",
    detail: "",
    user: "",
  });

  const [writeBtn, setWriteBtn] = useState(false);
  const [itemValue, setItemValue] = useState([]);
  const [comment, setComment] = useState();

  useEffect(() => {
    fetch("http://10.58.7.20:8000/questions/question", {
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(data => {
        setItemValue(data.result);
      });
  }, []);

  useEffect(() => {
    fetch("http://10.58.7.20:8000/questions/answer", {
      headers: { Authorization: token },
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setComment(data.result);
        console.log(data.result);
      });
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    setItemValue(prev => [...prev, inquiryInput]);
    fetch("http://10.58.7.20:8000/questions/question", {
      method: "POST",
      headers: { Authorization: token },
      body: JSON.stringify({
        title: inquiryInput.title,
        detail: inquiryInput.detail,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(inputHandler);
        if (result.token === token) {
          alert("로그인 후 작성해주세요.");
        } else {
          actionWriteBtn();
        }
      });
  };
  const inputHandler = e => {
    setInquiryInput(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const deleteItem = id => {
    console.log(id);
    fetch("http://10.58.7.20:8000/questions/question", {
      method: "DELETE",
      headers: { Authorization: token },
      body: JSON.stringify({
        question_id: id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setItemValue(data.result);
      });
  };

  console.log(itemValue);

  const deleteHandler = id => {
    console.log(id);
    fetch("http://10.58.7.20:8000/questions/answer", {
      method: "DELETE",
      headers: { Authorization: token },
      body: JSON.stringify({
        answer_id: id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.result);
        setComment(data.result);
      });
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
          comment={comment}
          setComment={setComment}
          deleteHandler={deleteHandler}
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
