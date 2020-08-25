import React, { useEffect, useState } from "react";
import "./index.css";

const FooterApp = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const time = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(time);
    };
  });
  return (
    <div className="footer">
      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          padding: "10px 10px",
        }}
      >
        {" "}
        &copy;{" "}
        {date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear()}{" "}
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
};
export default FooterApp;
