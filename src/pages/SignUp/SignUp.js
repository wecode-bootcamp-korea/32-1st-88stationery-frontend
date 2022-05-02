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
    detailAddress: "",
    birth: "",
  });

  const [valueCheck, setValueCheck] = useState({
    id: false,
    pw: false,
    name: false,
    phone: false,
    pwCheck: false,
    address: false,
    detailAddress: false,
    birth: false,
  });
  const [disabled, setDisabled] = useState(true);

  const valueIdText = (
    <>
      {userInfo.id.length > 0 ? (
        userInfo.id.includes("@") ? (
          ""
        ) : (
          <p className="showValueFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );

  const valuePwText = (
    <>
      {userInfo.pw.length > 0 ? (
        userInfo.pw.length >= 8 ? (
          ""
        ) : (
          <p className="showValuePwFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );

  const valuePwCheckText = (
    <>
      {userInfo.pwCheck.length > 0 ? (
        userInfo.pwCheck === userInfo.pw ? (
          ""
        ) : (
          <p className="showValuePwCheckFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );

  const valueNameCheckText = (
    <>
      {userInfo.name.length > 0 ? (
        userInfo.name ? (
          ""
        ) : (
          <p className="showValueFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );

  const valuePhoneCheckText = (
    <>
      {userInfo.phone.length > 0 ? (
        userInfo.phone ? (
          ""
        ) : (
          <p className="showValueFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );
  const valueAddressCheckText = (
    <>
      {userInfo.address.length > 0 ? (
        userInfo.address ? (
          ""
        ) : (
          <p className="showValueFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );

  const valueDetailAddressCheckText = (
    <>
      {userInfo.detailAddress.length > 0 ? (
        userInfo.detailAddress ? (
          ""
        ) : (
          <p className="showValueFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );

  const valueBirthCheckText = (
    <>
      {userInfo.birth.length > 0 ? (
        userInfo.birth[4] === "-" &&
        userInfo.birth[7] === "-" &&
        userInfo.birth.length >= 10 ? (
          ""
        ) : (
          <p className="showValueBirthFail" />
        )
      ) : (
        <p className="showAlertText" />
      )}
    </>
  );

  const onSubmit = e => {
    e.preventDefault();
    fetch("http://10.58.5.120:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.id,
        password: userInfo.pw,
        name: userInfo.name,
        phone_number: userInfo.phone,
        address1: userInfo.address,
        address2: userInfo.detailAddress,
        birth_date: userInfo.birth,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  const isDisabled = () => {
    userInfo.id.includes("@") &&
    userInfo.pw.length >= 8 &&
    userInfo.pw === userInfo.pwCheck &&
    userInfo.name.length &&
    userInfo.phone.length &&
    userInfo.address.length &&
    userInfo.detailAddress.length &&
    userInfo.birth[4] === "-" &&
    userInfo.birth[7] === "-" &&
    userInfo.birth.length >= 10
      ? setDisabled(false)
      : setDisabled(true);
  };

  const putUserInfo = e => {
    e.target.name === "id"
      ? setValueCheck(prev => ({ ...prev, id: true }))
      : e.target.name === "pw"
      ? setValueCheck(prev => ({ ...prev, pw: true }))
      : e.target.name === "pwCheck"
      ? setValueCheck(prev => ({ ...prev, pwCheck: true }))
      : e.target.name === "name"
      ? setValueCheck(prev => ({ ...prev, name: true }))
      : e.target.name === "phone"
      ? setValueCheck(prev => ({ ...prev, phone: true }))
      : e.target.name === "address"
      ? setValueCheck(prev => ({ ...prev, address: true }))
      : e.target.name === "detailAddress"
      ? setValueCheck(prev => ({ ...prev, detailAddress: true }))
      : e.target.name === "birth" &&
        setValueCheck(prev => ({ ...prev, birth: true }));

    setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showAlertText = e => {
    e.target.name === "id"
      ? setValueCheck(prev => ({ ...prev, id: true }))
      : e.target.name === "pw"
      ? setValueCheck(prev => ({ ...prev, pw: true }))
      : e.target.name === "pwCheck"
      ? setValueCheck(prev => ({ ...prev, pwCheck: true }))
      : e.target.name === "name"
      ? setValueCheck(prev => ({ ...prev, name: true }))
      : e.target.name === "phone"
      ? setValueCheck(prev => ({ ...prev, phone: true }))
      : e.target.name === "address"
      ? setValueCheck(prev => ({ ...prev, address: true }))
      : e.target.name === "detailAddress"
      ? setValueCheck(prev => ({ ...prev, detailAddress: true }))
      : e.target.name === "birth" &&
        setValueCheck(prev => ({ ...prev, birth: true }));
  };

  return (
    <form
      action="POST"
      className="signUp"
      onKeyUp={isDisabled}
      onSubmit={onSubmit}
    >
      <h2 className="signUpTitle">회원가입</h2>
      <div className="accountContent">
        <div className="accountTitleProcess">
          <h3>회원정보</h3>
          <ul className="processBox">
            <li className="process">01</li>
          </ul>
        </div>
        <ul className="signUpInfoInputs">
          <li className="signUpId">
            <div className="inputIdBox relativeText">
              <input
                className={userInfo.id.includes("@") ? "successBox" : ""}
                type="email"
                placeholder="아이디"
                name="id"
                onChange={putUserInfo}
                autoComplete="off"
                onBlur={showAlertText}
              />
              {valueCheck.id && valueIdText}
            </div>
          </li>
          <li className="signUpPw">
            <div className="inputPwBox relativeText">
              <input
                className={userInfo.pw.length >= 8 ? "successBox" : ""}
                type="password"
                placeholder="비밀번호"
                name="pw"
                onChange={putUserInfo}
                autoComplete="off"
                onBlur={showAlertText}
              />
              {valueCheck.pw && valuePwText}
            </div>
            <div className="inputPwCheckBox relativeText">
              <input
                className={
                  userInfo.pw !== "" && userInfo.pw === userInfo.pwCheck
                    ? "successBox"
                    : ""
                }
                type="password"
                placeholder="비밀번호 확인"
                name="pwCheck"
                onChange={putUserInfo}
                autoComplete="off"
                onBlur={showAlertText}
              />
              {valueCheck.pwCheck && valuePwCheckText}
            </div>
          </li>
          <li className="signUpName">
            <div className="inputNameBox relativeText">
              <input
                className={userInfo.name ? "successBox" : ""}
                type="text"
                placeholder="이름"
                name="name"
                onChange={putUserInfo}
                onBlur={showAlertText}
                autoComplete="off"
              />
              {valueCheck.name && valueNameCheckText}
            </div>
          </li>
          <li className="singUpPhone">
            <div className="inputPhoneBox relativeText">
              <input
                className={userInfo.phone ? "successBox" : ""}
                type="number"
                placeholder="휴대폰 번호"
                name="phone"
                onChange={putUserInfo}
                onBlur={showAlertText}
                autoComplete="off"
              />
              {valueCheck.phone && valuePhoneCheckText}
            </div>
          </li>
          <li className="signUpAddress">
            <div className="inputAddressBox relativeText">
              <input
                className={userInfo.address ? "successBox" : ""}
                type="text"
                placeholder="주소"
                name="address"
                onChange={putUserInfo}
                onBlur={showAlertText}
                autoComplete="off"
              />
              {valueCheck.address && valueAddressCheckText}
            </div>
          </li>
          <li className="signUpAddress">
            <div className="inputAddressBox relativeText">
              <input
                className={userInfo.detailAddress ? "successBox" : ""}
                type="text"
                placeholder="상세주소"
                name="detailAddress"
                onChange={putUserInfo}
                onBlur={showAlertText}
                autoComplete="off"
              />
              {valueCheck.detailAddress && valueDetailAddressCheckText}
            </div>
          </li>
          <li>
            <div className="inputBirthBox">
              <input
                className={
                  userInfo.birth[4] === "-" &&
                  userInfo.birth[7] === "-" &&
                  userInfo.birth.length >= 10
                    ? "successBox"
                    : ""
                }
                type="text"
                pattern="[0-9\b-]*"
                placeholder="생일정보"
                name="birth"
                onChange={putUserInfo}
                onBlur={showAlertText}
                autoComplete="off"
              />
              {valueCheck.birth && valueBirthCheckText}
              <p>생일을 정확하게 입력해주세요.(예: 2000-12-31)</p>
              <p>만 14세 이상만 회원가입이 가능합니다.</p>
            </div>
          </li>
        </ul>
      </div>
      <footer className="signUpBtn">
        <button
          type="submit"
          disabled={disabled}
          className={disabled ? "disabled" : "abled"}
        >
          가입하기
        </button>
      </footer>
    </form>
  );
};

export default SignUp;
