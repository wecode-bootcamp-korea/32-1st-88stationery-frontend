import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Search from "../Search/Search";
import NavSideCategory from "./NavSideCategory";
import LoginModal from "../Modal/LoginModal";
import { config } from "../../config";
import "./Nav.scss";

const CATEGORY_LIST = [
  { id: 6, category: "전체" },
  { id: 1, category: "문구" },
  { id: 2, category: "리빙" },
  { id: 3, category: "책" },
  { id: 4, category: "완구" },
  { id: 5, category: "식품" },
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
  function scrollUpHandler() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
  }

  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.reload();
  };
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }

    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <nav className="navigation">
      <div className={scrollY !== 0 ? "gnbAction" : "gnbBase"}>
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

            {localStorage.getItem("token") ? (
              <>
                <Link to="/cart">
                  <i className="fa fa-light fa-cart-shopping" />
                </Link>
                <Link to="/mypage">
                  <i className="fa-solid fa-user" />
                </Link>

                <h1 className="userName">
                  {localStorage.getItem("userName")}님
                </h1>
                <button className="gnbLogOut" onClick={logOutHandler}>
                  로그아웃
                </button>
              </>
            ) : (
              <button className="gnbLogin" onClick={handleisLoginModalOn}>
                로그인
              </button>
            )}

            <i
              className="fa fa-light fa-align-justify"
              onClick={handleSideBarOn}
            />
          </div>
        </div>
      </div>
      <Search isSearchOn={isSearchOn} handleSearchBarOn={handleSearchBarOn} />
      <Aside
        CATEGORY_LIST={CATEGORY_LIST}
        isSideBarOn={isSideBarOn}
        handleSideBarOn={handleSideBarOn}
      />
      {scrollY > 200 && (
        <i
          className="fa-regular fa-hand-pointer fa-3x"
          onClick={scrollUpHandler}
        />
      )}
      {isLoginModalOn && (
        <LoginModal
          isLoginModalOn={isLoginModalOn}
          handleisLoginModalOn={handleisLoginModalOn}
          setIstLoginModalOn={setIstLoginModalOn}
        />
      )}
    </nav>
  );
};

export default Nav;
