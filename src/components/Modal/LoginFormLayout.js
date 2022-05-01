import React from "react";

function LoginFormLayout({ children }) {
  return (
    <div className="login">
      <div className="loginContainer">
        {children}
        <ul className="loginNav">
          <li>회원가입</li>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
      </div>
    </div>
  );
}

export default LoginFormLayout;
