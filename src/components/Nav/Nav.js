import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Search from "../Search/Search";
import NavSideCategory from "./NavSideCategory";
import "./Nav.scss";

const Nav = () => {
  const [CATEGORY_LIST, setCATEGORY_LIST] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [isSideBarOn, setisSideBarOn] = useState(false);
  const [isSearchOn, setisSearchOn] = useState(false);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  function handleSideBarOn() {
    isSideBarOn === false ? setisSideBarOn(true) : setisSideBarOn(false);
  }
  function handleSearchBarOn() {
    isSearchOn === false ? setisSearchOn(true) : setisSearchOn(false);
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

  useEffect(() => {
    fetch("data/CategoryListData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setCATEGORY_LIST(data);
      });
  }, []);

  return (
    <>
      <nav className={scrollY !== 0 ? "gnb action" : "gnb base"}>
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
            <button className="gnbLogin">로그인</button>
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

      {(isSideBarOn || isSearchOn) && (
        <div
          className={isSideBarOn === true ? "sideScreenHide" : "sideScreen"}
          onClick={handleSideBarOn}
        />
      )}
    </>
  );
};

export default Nav;
