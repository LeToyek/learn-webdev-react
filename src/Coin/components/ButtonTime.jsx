import React from "react";

const ButtonTime = ({ setToYear, setToMonth, setToDay }) => {
  return (
    <div className="time">
      <div className="density">
        <button className="year" onClick={setToYear}>
          Year
        </button>
        <button className="month" onClick={setToMonth}>
          Month
        </button>
        <button className="day" onClick={setToDay}>
          Day
        </button>
      </div>
    </div>
  );
};

export default ButtonTime;
