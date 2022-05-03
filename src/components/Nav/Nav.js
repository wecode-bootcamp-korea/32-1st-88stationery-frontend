import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import Search from "../Search/Search";
import NavSideCategory from "./NavSideCategory";
import LoginModal from "../Modal/LoginModal";
import "./Nav.scss";

const CATEGORY_LIST = [
  { category: "전체" },
  { category: "문구" },
  { category: "리빙" },
  { category: "책" },
  { category: "완구" },
  { category: "식품" },
];

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSideBarOn, setisSideBarOn] = useState(false);
  const [isSearchOn, setisSearchOn] = useState(false);
  const [isLoginModalOn, setIstLoginModalOn] = useState(false);
  const [userInput, setUserInput] = useState("");
  const userName = "";
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

  const handleChange = e => {
    setUserInput(e.target.value);
  };
  const filterInputValue = PRODUCT.filter(search => {
    return search.name.includes(userInput);
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

            {localStorage.getItem("token") ? (
              <span>{userName}</span>
            ) : (
              <button className="gnbLogin" onClick={handleisLoginModalOn}>
                로그인
              </button>
            )}

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
      <Search
        isSearchOn={isSearchOn}
        handleSearchBarOn={handleSearchBarOn}
        handleChange={handleChange}
        filterInputValue={filterInputValue}
        userInput={userInput}
      />
      <Aside
        CATEGORY_LIST={CATEGORY_LIST}
        isSideBarOn={isSideBarOn}
        handleSideBarOn={handleSideBarOn}
      />
    </>
  );
};
const PRODUCT = [
  {
    id: 1,
    name: "고양이",
    context: "...",
    price: 1000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이1",
    context: "...",
    price: 2000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이3",
    context: "...",
    price: 3000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이4",
    context: "...",
    price: 4000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이5",
    context: "...",
    price: 5000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이6",
    context: "...",
    price: 6000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이7",
    context: "...",
    price: 7000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이8",
    context: "...",
    price: 8000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이9",
    context: "...",
    price: 9000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이10",
    context: "...",
    price: 10000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이11",
    context: "...",
    price: 11000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이12",
    context: "...",
    price: 12000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
  {
    id: 1,
    name: "고양이13",
    context: "...",
    price: 13000,
    src1: "/images/items/2.jpeg",
    src2: "/images/items/3.jpeg",
  },
];

export default Nav;
