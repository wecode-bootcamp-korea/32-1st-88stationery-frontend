import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Search from "../Search/Search";
import NavSideCategory from "./NavSideCategory";
import LoginModal from "../Login/LoginModal";
import "./Nav.scss";

const CATEGORY_LIST = [
  { path: "baseball", category: "야구" },
  { path: "swim", category: "수영" },
  { path: "running", category: "육상" },
  { path: "sky", category: "체조" },
  { path: "arrow", category: "양궁" },
];

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSideBarOn, setisSideBarOn] = useState(false);
  const [isSearchOn, setisSearchOn] = useState(false);
  const [isLoginModalOn, setIstLoginModalOn] = useState(false);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  function handleSideBarOn() {
    setisSideBarOn(!isSideBarOn);
  }

  function handleSearchBarOn() {
    setisSearchOn(!isSearchOn);
  }
  function handleisLoginModalOn() {
    setIstLoginModalOn(!isLoginModalOn);
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <nav className={scrollY !== 0 ? "gnbAction" : "gnbBase"}>
        <div className="gnbContainer">
          <div className="gnbLogo">
            <Link to="/main">
              <img
                src="/images/common/88munbangguLogo.png"
                alt="88stationeryLogo"
              />
            </Link>
          </div>
          <div className="gnbCategory">
            <ul className="gnbCategoryList">
              <NavSideCategory CATEGORY_LIST={CATEGORY_LIST} />
            </ul>
          </div>
          <div className="gnbEtc">
            <i
              className=" fa fa-light fa-magnifying-glass"
              onClick={handleSearchBarOn}
            />
            <i className="fa fa-light fa-cart-shopping" />

            <button className="gnbLogin" onClick={handleisLoginModalOn}>
              로그인
            </button>

            {isLoginModalOn && (
              <LoginModal
                isLoginModalOn={isLoginModalOn}
                handleisLoginModalOn={handleisLoginModalOn}
              />
            )}

            <i
              className="fa fa-light fa-align-justify"
              onClick={handleSideBarOn}
            />
          </div>
        </div>
      </nav>
      <Search isSearchOn={isSearchOn} handleSearchBarOn={handleSearchBarOn} />
      <Aside
        CATEGORY_LIST={CATEGORY_LIST}
        isSideBarOn={isSideBarOn}
        handleSideBarOn={handleSideBarOn}
      />
    </>
  );
};

export default Nav;
