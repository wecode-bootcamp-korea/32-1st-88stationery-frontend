import React from "react";
import NavSideCategory from "../Nav/NavSideCategory";
import AsideGlobalChange from "./AsideGlobalChange";
import { useNavigate } from "react-router-dom";
import "./Aside.scss";

const Aside = ({ CATEGORY_LIST, isSideBarOn, handleSideBarOn }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const loginAvalid = token;
  console.log(token);

  const goToInquiry = () => {
    if (token) {
      navigate("/inquiry");
    } else {
      alert("로그인 후 이용 가능한 서비스입니다🤗");
    }
  };

  return (
    <>
      <aside className={isSideBarOn ? "gsb" : "gsbHidden"}>
        <header className="gsbHeader">
          <h2>
            {localStorage.getItem("token") ? (
              <strong>{loginAvalid}님 환영합니다</strong>
            ) : (
              <p>
                앗!
                <br /> 로그인이 필요합니다
              </p>
            )}
          </h2>
        </header>
        <nav className="gsbNavCategory">
          <span className="gsbNavBtn">
            <i
              className="fa fa-duotone fa-xmark fa-2x"
              onClick={handleSideBarOn}
            />
          </span>
          <h2>카테고리</h2>
          <ul className="gsbCategoryList">
            <NavSideCategory CATEGORY_LIST={CATEGORY_LIST} />
          </ul>
        </nav>
        <footer className="gsbFooter">
          <div className="footerContainer">
            <ul>
              <li>
                <span onClick={goToInquiry}>
                  <i className="fa fa-solid fa-headphones-simple fa-2x" />
                  1:1문의
                </span>
              </li>
              <li>
                <span onClick={() => alert("그런 건 없다😋")}>이메일 문의</span>
              </li>
            </ul>
          </div>
        </footer>
      </aside>
      {isSideBarOn && (
        <>
          <div
            className={isSideBarOn ? "sideScreenHide" : "sideScreen"}
            onClick={handleSideBarOn}
          />
          <AsideGlobalChange />
        </>
      )}
    </>
  );
};

export default Aside;
