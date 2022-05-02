import React, { useState } from "react";
import Welcome from "../../components/Welcome/Welcome";
import ProductList from "../../components/OrderItems/OrderItems";
import "./Mypage.scss";

const Mypage = () => {
  const [BtnMove, setBtnMove] = useState(true);
  const onClick = () => {
    setBtnMove(!BtnMove);
  };
  return (
    <div className="myPageContentBox">
      <div className="myPageAllBox">
        <h1 className="myPageTitle">마이페이지</h1>
        <div className="asideWelcomeBox">
          <aside className="asideBar">
            <div>
              <h2>쇼핑 정보</h2>
              <span href="#" onClick={onClick}>
                주문 상품 조회
              </span>
            </div>
            <div>
              <h2>고객 센터</h2>
              <a href="">문의 내역</a>
            </div>
          </aside>
          {BtnMove ? <Welcome /> : <ProductList />}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
