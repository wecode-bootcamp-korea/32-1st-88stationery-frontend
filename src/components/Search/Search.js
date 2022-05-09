import React, { useState, useEffect } from "react";
import { config } from "../../config";
import SearchItems from "./SearchItems";
import "../Search/Search.scss";

function Search({ isSearchOn, handleSearchBarOn }) {
  const [userInput, setUserInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const filterInputValue = userSearch.filter(search => {
    return search.name.includes(userInput);
  });

  useEffect(() => {
    fetch(`${config.search}?search=${userInput}`, {})
      .then(response => response.json())
      .then(result => {
        setUserSearch(result.searched_products);
      });
  }, [userInput]);

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
              return (
                <SearchItems
                  key={list.product_id}
                  list={list}
                  handleSearchBarOn={handleSearchBarOn}
                />
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
