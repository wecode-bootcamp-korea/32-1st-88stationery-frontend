import React from "react";
import "../Search/Search.scss";
function Search({ searchOn, handleSearchBarOn }) {
  return (
    <div
      className={`${
        searchOn === true
          ? "searchBarContainer action"
          : "searchBarContainer base"
      }`}
    >
      <div className="searchBarWrapper">
        <div className="searchBarHeader">
          <input type="text" placeholder="검색어를 입력해주세요" />
          <i className=" fa fa-light fa-magnifying-glass fa-2x" />
        </div>
        <div className="searchBarRecentContainer">
          <section className="searchBarRecentItems">
            <h3>최근 검색어</h3>
            <div className="showRecentItemsList">
              <p>최근 검색어가 없어요</p>
            </div>
          </section>
        </div>
        <i
          className="fa fa-duotone fa-xmark fa-2x"
          onClick={handleSearchBarOn}
        />
      </div>
    </div>
  );
}

export default Search;
