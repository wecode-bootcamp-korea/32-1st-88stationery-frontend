import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <figure className="logoImage">
        <img src="/images/common/88munbangguLogo.png" alt="logoImage" />
      </figure>
      <div className="footerInfo">
        <p>상호 : (위)독수리형제들</p>
        <p>대표 : 아무개</p>
        <p>사업자등록번호 : 있었으면 좋겠다.</p>
        <p>통신판매업신고번호 : 1234-서울강남-1234</p>
        <p>사업자정보확인</p>
        <p>대표번호 : 5252-5252</p>
        <p>이메일 : 88문방구@위코드.com</p>
        <p>주소 : 서울특별시 선릉 위워크 10층</p>
        <p>호스팅제공 : 누군가가 해줍니다</p>
        <p>© Woowa Brothers Corp 들어가고 싶습니다.</p>
      </div>
    </footer>
  );
};

export default Footer;
