import React, { useState } from "react";
import "./SignUp.scss";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
    pwCheck: "",
    name: "",
    phone: "",
    address: "",
    birth: "",
  });

  const [valueCheck, setValueCheck] = useState(false);

  const putUserInfo = e => {
    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(userInfo);
  };
  // console.log(valueCheck, "valueCheck");

  const alertText = () => {
    setValueCheck(userInfo.id ? true : false);
  };

  return (
    <form action="POST" className="signUpForm">
      <h2 className="signUpTitle">회원가입</h2>
      <div className="accountContent">
        <div className="accountTitleProcess">
          <h3>회원정보</h3>
          <ul className="processBox">
            <li className="processFirst">01</li>
            <span className="processUnderBar">__</span>
            <li className="processSecond">02</li>
          </ul>
        </div>
        <ul className="signUpInfoInputs">
          <li className="signUpId">
            <div className="inputIdBox">
              <input
                type="email"
                placeholder="아이디"
                name="id"
                onChange={putUserInfo}
                onBlur={alertText}
              />
              {/* {userInfo.id.length === 0 ? (
                <p className={valueCheck ? "alertText" : ""} />
              ) : userInfo.id.length < 5 && userInfo.id.includes("@") ? (
                <p className={valueCheck ? "valueFail" : ""} />
              ) : (
                <p className="valueFail" />
              )} */}
            </div>
          </li>
          <li className="signUpPw">
            <div className="inputPwBox">
              <input
                type="password"
                placeholder="비밀번호"
                name="pw"
                onChange={putUserInfo}
              />
            </div>
            <div className="inputPwCheckBox">
              <input
                type="password"
                placeholder="비밀번호 확인"
                name="pwCheck"
                onChange={putUserInfo}
              />
            </div>
          </li>
          <li className="signUpName">
            <div className="inputNameBox">
              <input
                type="text"
                placeholder="이름"
                name="name"
                onChange={putUserInfo}
              />
            </div>
          </li>
          <li className="singUpPhone">
            <div className="inputPhoneBox">
              <input
                type="text"
                placeholder="휴대폰 번호"
                name="phone"
                onChange={putUserInfo}
              />
            </div>
          </li>
          <li className="signUpAddress">
            <div className="inputAddressBox">
              <input
                type="text"
                placeholder="주소"
                name="address"
                onChange={putUserInfo}
              />
            </div>
          </li>
          {/* <li className="signUpEmail">
            <div className="inputEmailBox">
              <input
                type="text"
                placeholder="이메일"
                name="email"
                onChange={putUserInfo}
              />
              <p>아이디/비밀번호 찾기에 활용되므로 정확하게 입력해주세요.</p>
            </div>
          </li> */}
          <li>
            <div className="inputBirthBox">
              <input
                type="text"
                placeholder="생일정보"
                name="birth"
                onChange={putUserInfo}
              />
              <p>생일을 정확하게 입력해주세요.(예: 2000-12-31)</p>
              <p>만 14세 이상만 회원가입이 가능합니다.</p>
            </div>
          </li>
        </ul>
      </div>
      <footer className="signUpBtn">
        <button type="submit" disabled>
          가입하기
        </button>
      </footer>
    </form>
  );
};

export default SignUp;
