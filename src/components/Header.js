import React from "react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 10px 20px 40px",
      }}
    >
      <div className="title">
        <h1 style={{ fontWeight: "400" }}>Interview Calendar</h1>
      </div>
      <button
        style={{
          background: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          fill="#ff3131"
          stroke="#ff3131"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="4"></line>
          <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="4"></line>
        </svg>
      </button>
    </div>
  );
}
