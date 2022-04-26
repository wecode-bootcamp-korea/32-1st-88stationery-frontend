import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Search from "../Search/Search";
import "./Nav.scss";
import NavSideCategoryComponents from "./NavSideCategoryComponents";

const Nav = () => {
  const categoryList = [
    { path: "baseball", category: "야구" },
    { path: "swim", category: "수영" },
    { path: "running", category: "육상" },
    { path: "sky", category: "체조" },
    { path: "arrow", category: "양궁" },
  ];

  const [ScrollY, setScrollY] = useState(0);
  const [powerOn, setPowerOn] = useState(false);
  const [searchOn, setSearchOn] = useState(false);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  function handleSideBarOn() {
    powerOn === false ? setPowerOn(true) : setPowerOn(false);
  }
  function handleSearchBarOn() {
    searchOn === false ? setSearchOn(true) : setSearchOn(false);
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <>
      <nav className={ScrollY !== 0 ? "gnb action" : "gnb base"}>
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
              <NavSideCategoryComponents categoryList={categoryList} />
            </ul>
          </div>
          <div className="gnbEtc">
            <i
              className=" fa fa-light fa-magnifying-glass"
              onClick={handleSearchBarOn}
            />
            <i className="fa fa-light fa-cart-shopping" />
            <button className="gnbLogin">로그인</button>
            <i
              className="fa fa-light fa-align-justify"
              onClick={handleSideBarOn}
            />
          </div>
        </div>
      </nav>
      <Search searchOn={searchOn} handleSearchBarOn={handleSearchBarOn} />
      <Aside
        categoryList={categoryList}
        powerOn={powerOn}
        handleSideBarOn={handleSideBarOn}
      />

      {(powerOn || searchOn) && (
        <div
          className={`${powerOn === true ? "sideScreenHide" : "sideScreen"}`}
          onClick={handleSideBarOn}
        />
      )}
    </>
  );
};

export default Nav;
