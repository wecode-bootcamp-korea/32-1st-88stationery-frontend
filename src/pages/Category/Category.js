import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Category.scss";
import { config } from "../../config";

let LIMIT = 4;

const Category = () => {
  const [itemLists, setItemLists] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [sortUrl, setSortUrl] = useState("");
  const location = useLocation();
  const params = useParams();

  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    fetch(
      `${config.category}/${params.id}?${sortUrl}&${
        location.search || `limit=${LIMIT}&offset=${(page - 1) * LIMIT}`
      }`
    )
      .then(res => res.json())
      .then(res => {
        if (res.products.length) {
          const copyArray = [...res.products];
          setCategoryInfo(res.category[0]);
          setItemLists(itemLists.concat(copyArray));
        } else {
          alert("마지막 상품입니다");
          setIsLast(true);
        }
      });
  }, [page, sortUrl]);

  const updateOffset = e => {
    setPage(page + 1);
  };

  const sortCategoryHandler = e => {
    if (e.target.type === "sortByLowPrice" && sortUrl !== "sort_method=1") {
      setItemLists([]);
      setPage(1);
      setSortUrl("sort_method=1");
      setIsLast(false);
    } else if (
      e.target.type === "sortByHighPrice" &&
      sortUrl !== "sort_method=2"
    ) {
      setItemLists([]);
      setPage(1);
      setSortUrl("sort_method=2");
      setIsLast(false);
    } else if (
      e.target.type === "sortByNewItems" &&
      sortUrl !== "sort_method=3"
    ) {
      setItemLists([]);
      setPage(1);
      setSortUrl("sort_method=3");
      setIsLast(false);
    }
  };

  return (
    <>
      <header className="category">
        <div className="categoryContainer">
          {categoryInfo.length !== 0 && (
            <>
              <div className="categoryHeader">
                <h1>
                  {categoryInfo.category_name}
                  <p>총{itemLists.length}개</p>
                </h1>
              </div>
              <div className="categoryInfo">
                <p>{categoryInfo.category_detail}</p>
              </div>
            </>
          )}
        </div>
      </header>
      <ItemContainer
        name="itemsInCategory"
        itemLists={itemLists}
        updateOffset={updateOffset}
        setItemLists={setItemLists}
        sortCategoryHandler={sortCategoryHandler}
        isLast={isLast}
      />
    </>
  );
};

export default Category;
