import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Category.scss";
import { config } from "../../config";

const LIMIT = 4;
let PAGE = 1;

const Category = () => {
  const [itemLists, setItemLists] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    fetch(
      `${config.category}/${params.id}${
        location.search || `?limit=${LIMIT}&offset=0`
      }`
    )
      .then(res => res.json())
      .then(res => {
        const copyArray = [...res.products];
        setItemLists(itemLists.concat(copyArray));
      });
  }, [PAGE]);

  const updateOffset = e => {
    const offset = PAGE * LIMIT;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;
    PAGE += 1;
    navigate(`${queryString}`);
  };
  // useEffect(() => {
  //   fetch(
  //     `http://10.58.1.230:8000/products/category/${params.id}?sort_method=0&offset=0&limit=4`
  //   )
  //     .then(res => res.json())
  //     .then(res => {
  //       setItemLists(res.products);
  //       setCategoryInfo(res.category);
  //     });
  // }, [params.id]);

  return (
    <>
      <header className="category">
        <div className="categoryContainer">
          {categoryInfo.length !== 0 && (
            <>
              <div className="categoryHeader">
                <h1>
                  {categoryInfo[0].category_name}
                  <p>총{itemLists.length}개</p>
                </h1>
              </div>
              <div className="categoryInfo">
                <p>{categoryInfo[0].category_detail}</p>
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
      />
    </>
  );
};

export default Category;
