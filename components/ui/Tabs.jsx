import React from "react";

export default function Tabs({ title, buttonStyle, textStyle, onClick }) {
  return (
    <button className={`${buttonStyle}`} onClick={onClick}>
      <span className={`${textStyle} font-semibold`}>{title}</span>
    </button>
  );
}
