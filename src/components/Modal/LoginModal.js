import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { config } from "../../config";
import "./Login.scss";
import AsideGlobalChange from "../Aside/AsideGlobalChange";
import LoginFormLayout from "./LoginFormLayout";

const ERROR_MESSAGE = {
  INVALID_EMAIL: "존재하지 않는 아이디입니다",
  INVALID_PASSWORD: "올바르지 않은 패스워드 입니다",
  SUCCESS: "88문방구에 오신걸 환영합니다",
};

const LoginModal = ({
  isLoginModalOn,
  handleisLoginModalOn,
  setIstLoginModalOn,
}) => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  const inputHandler = e => {
    setUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    fetch(`${config.login}`, {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.id,
        password: userInfo.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert(ERROR_MESSAGE[result.message]);

        localStorage.setItem("token", result.Authorization);
        localStorage.setItem("userName", result.user_name);
        setIstLoginModalOn(false);
      });
  };

  const goToSignUp = () => {
    navigate("/signup");
    setIstLoginModalOn(false);
  };

  const idisValid = userInfo.id.length === 0;
  const pwisValid = userInfo.pw.length === 0;

  const validateEmailType =
    (userInfo.id.includes("@") && userInfo.id.includes(".com")) ||
    userInfo.id.length === 0;

  const emailValid =
    userInfo.id.includes("@") &&
    userInfo.id.includes(".com") &&
    userInfo.id.length > 1;

  const buttonActive = emailValid && !pwisValid;

  return (
    <>
      <LoginFormLayout goToSignUp={goToSignUp}>
        <form action="" onSubmit={onSubmit}>
          <h1>로그인</h1>
          <div className="accountContent">
            <ul className="loginForm">
              <li>
                <input
                  className={!emailValid ? "inputDisable" : "inputAble"}
                  type="text"
                  placeholder="아이디"
                  name="id"
                  onChange={inputHandler}
                />
                {idisValid && <p>ℹ 아이디를 입력해주세요.</p>}
                {!validateEmailType && (
                  <p>ℹ 아이디는 이메일 형식이어야 합니다.</p>
                )}
                {validateEmailType && !idisValid && (
                  <p className="loginInputText">ℹ 아이디 입력완료</p>
                )}
              </li>
              <li>
                <input
                  className={pwisValid ? "inputDisable" : "inputAble"}
                  type="password"
                  placeholder="비밀번호"
                  name="pw"
                  onChange={inputHandler}
                />
                {pwisValid && <p>ℹ 비밀번호를 입력해주세요</p>}
                {!pwisValid && (
                  <p className="loginInputText">ℹ 비밀번호 입력완료</p>
                )}
              </li>
            </ul>
            <div className="loginCheckBox">
              <input type="checkbox" id="isSaveIdCheck" />
              <label htmlFor="isSaveIdCheck"> 아이디 저장</label>
            </div>
          </div>
          <footer className="buttonGroup">
            <button
              className={!buttonActive ? "btnLogin" : "btnLogin active"}
              disabled={!buttonActive}
              type="submit"
            >
              로그인
            </button>
          </footer>
        </form>
      </LoginFormLayout>

      {isLoginModalOn && (
        <>
          <div
            className={isLoginModalOn ? "loginScreenHide" : "loginScreen"}
            onClick={handleisLoginModalOn}
          />
          <AsideGlobalChange />
        </>
      )}
    </>
  );
};

export default LoginModal;
