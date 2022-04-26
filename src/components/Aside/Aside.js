import React from "react";
import NavSideCategoryComponents from "../Nav/NavSideCategoryComponents";
import "./Aside.scss";
const Aside = ({ categoryList, powerOn, handleSideBarOn }) => {
  return (
    <aside className={`${powerOn === true ? "gsb" : "gsb hidden"}`}>
      <header className="gsbHeader">
        <h2>
          앗<p>로그인이 필요합니다</p>
        </h2>
      </header>
      <nav className="gsbNavCategory">
        <i className="fa fa-duotone fa-xmark fa-2x" onClick={handleSideBarOn} />
        <h2>카테고리</h2>
        <ul className="gsbCategoryList">
          <NavSideCategoryComponents categoryList={categoryList} />
        </ul>
      </nav>
      <footer className="gsbFooter">
        <div className="footerContainer">
          <i class="fa fa-solid fa-headphones-simple fa-2x" />
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
  );
};

export default Aside;
