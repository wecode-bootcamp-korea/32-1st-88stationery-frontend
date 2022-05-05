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
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    fetch(
      `${config.category}/${params.id}${
        location.search || `?limit=${LIMIT}&offset=${(page - 1) * LIMIT}`
      }`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        const copyArray = [...res.products];
        setCategoryInfo(res.category[0]);
        setItemLists(itemLists.concat(copyArray));
      });
  }, [page]);

  const updateOffset = e => {
    // const offset = page * LIMIT;
    // const queryString = `?limit=${LIMIT}&offset=${offset}`;
    setPage(page + 1);
    // LIMIT += 4;
    // navigate(`${queryString}`);
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
        title="요즘 잘 나가요"
        itemLists={itemLists}
        updateOffset={updateOffset}
        setItemLists={setItemLists}
      />
    </>
  );
};

export default Category;
