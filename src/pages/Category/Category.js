import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Category.scss";

const Category = () => {
  const [itemLists, setitemLists] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(
      `http://10.58.1.230:8000/products/category/${params.id}?sort_method=0&offset=0&limit=8`
    )
      .then(res => res.json())
      .then(res => {
        setitemLists(res.products);
        setCategoryInfo(res.category);
      });
  }, [params.id]);

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
      />
    </>
  );
};

export default Category;
