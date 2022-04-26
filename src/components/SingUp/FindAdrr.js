import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const FindAddr = () => {
  const [zonecode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");

  const postCodeStyle = {
    display: "block",
    top: "50px",
    zIndex: "5",
  };
  const handleComplete = data => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
  };
  console.log(zonecode, address);

  return (
    <DaumPostcode
      onComplete={handleComplete}
      style={postCodeStyle}
      height={700}
    />
  );
};

export default FindAddr;
