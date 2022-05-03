import React, { useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import ProductList from "../../components/OrderItems/OrderItems";
import "./Mypage.scss";

const Mypage = () => {
  const [BtnMove, setBtnMove] = useState(true);
  const orderedItems = mockData;

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
              <Link to="/inquiry">문의 내역 </Link>
            </div>
          </aside>
          {BtnMove ? <Welcome /> : <ProductList orderedItems={orderedItems} />}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
const mockData = [
  {
    id: 1,
    name: "공책",
    price: 10000,
    count: 1,
    status: "배송중",
  },
  {
    id: 2,
    name: "공책",
    price: 1000,
    count: 3,
    status: "배송중",
  },
  {
    id: 3,
    name: "공책",
    price: 1000,
    count: 3,
    status: "배송준비",
  },
  {
    id: 4,
    name: "공책",
    price: 1000,
    count: 4,
    status: "배송완료",
  },
  {
    id: 5,
    name: "공책",
    price: 1000,
    count: 5,
    status: "배송준비",
  },
];
