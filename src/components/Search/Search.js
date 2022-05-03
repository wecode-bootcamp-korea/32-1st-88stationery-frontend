import React from "react";
import "../Search/Search.scss";
function Search({
  isSearchOn,
  handleSearchBarOn,
  handleChange,
  filterInputValue,
  userInput,
}) {
  return (
    <div
      className={
        isSearchOn ? "searchBarContainer action" : "searchBarContainer base"
      }
    >
      <div className="searchBarWrapper">
        <div className="searchBarHeader">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            onChange={handleChange}
          />
          <i className=" fa fa-light fa-magnifying-glass fa-2x" />
        </div>
        <div className="searchResultContainer">
          {userInput.length > 0 ? (
            filterInputValue.map(list => {
              const { id, name, src1 } = list;
              return (
                <div className="searchResult" key={id}>
                  <img src={src1} alt="searchImg" />
                  <h2>{name}</h2>
                </div>
              );
            })
          ) : (
            <div className="searchBarRecentContainer">
              <section className="searchBarRecentItems">
                <h3>검색어를 입력해주세요</h3>
              </section>
            </div>
          )}
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
