import React from "react";
import NavSideCategory from "../Nav/NavSideCategory";
import "./Aside.scss";

const Aside = ({ CATEGORY_LIST, isSideBarOn, handleSideBarOn }) => {
  return (
    <>
      <aside className={isSideBarOn ? "gsb" : "gsbHidden"}>
        <header className="gsbHeader">
          <h2>
            앗<p>로그인이 필요합니다</p>
          </h2>
        </header>
        <nav className="gsbNavCategory">
          <i
            className="fa fa-duotone fa-xmark fa-2x"
            onClick={handleSideBarOn}
          />
          <h2>카테고리</h2>
          <ul className="gsbCategoryList">
            <NavSideCategory CATEGORY_LIST={CATEGORY_LIST} />
          </ul>
        </nav>
        <footer className="gsbFooter">
          <div className="footerContainer">
            <i className="fa fa-solid fa-headphones-simple fa-2x" />
            <ul>
              <li>
                <span>1:1문의</span>
              </li>
              <li>
                <span>이메일 문의</span>
              </li>
            </ul>
          </div>
        </footer>
      </aside>
      {isSideBarOn && (
        <div
          className={isSideBarOn ? "sideScreenHide" : "sideScreen"}
          onClick={handleSideBarOn}
        />
      )}
    </>
  );
};

export default Aside;
