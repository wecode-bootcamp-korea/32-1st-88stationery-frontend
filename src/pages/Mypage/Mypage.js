import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../../components/OrderItems/OrderItems";
import "./Mypage.scss";

const Mypage = () => {
  const [BtnMove, setBtnMove] = useState(true);
  const [orderLists, setOrderLists] = useState([]);

  const onClick = () => {
    setBtnMove(!BtnMove);
  };

  useEffect(() => {
    fetch("http://10.58.1.230:8000/orders", {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.u8tQmYe21yFLPlb5ABDzRHAG7XGE2zugyDhD3IA5K1s",
      },
    })
      .then(res => res.json())
      .then(data => setOrderLists(data.orders));
  }, []);

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
          <ProductList orderLists={orderLists} />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
