import React from "react";
import icon from "../assets/icon.png";

const MiniGolfPage: React.FC = () => {
  return (
    <>
      <div>
        <div className="Main">
          <img width="200" alt="icon" src={icon} />
        </div>
        <h1>Mini-Golf Control</h1>
      </div>
    </>
  );
};
export default MiniGolfPage;
