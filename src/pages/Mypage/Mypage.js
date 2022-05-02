import React from "react";
import "./Mypage.scss";

const Mypage = () => {
  return (
    <div className="myPageContentBox">
      <div className="myPageAllBox">
        <h1 className="myPageTitle">마이페이지</h1>
        <div className="asideWelcomeBox">
          <aside className="asideBar">
            <div>
              <h2>쇼핑 정보</h2>
              <h3>주문 상품 조회</h3>
            </div>
            <div>
              <h2>고객 센터</h2>
              <h3>문의 내역</h3>
            </div>
          </aside>
          <div className="showInfo">
            <div className="welcomeBox">
              <span>반가워요, OOO님</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
