import React from "react";

export default function Burger({ open, setOpen }) {
  return (
    <div open={open} onClick={() => setOpen(!open)} className="menu-btn">
      <div className="top"></div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  );
}

