import React from "react";
import "./Category.scss";

const Category = () => {
  return (
    <header className="category">
      <div className="categoryContainer">
        <div className="categoryHeader">
          <h1>
            리빙
            <p>총 13개</p>
          </h1>
        </div>
        <div className="categoryInfo">
          <p>
            자주쓰는 물건과 이야기해 보는거 어때요?
            <br /> 혼자 풋! 하고 웃게도 될걸요.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Category;
