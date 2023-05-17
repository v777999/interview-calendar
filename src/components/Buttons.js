import React from "react";
import { styled } from "styled-components";

export const ButtonLeft = () => {
  return (
    <BtnNav>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 52 52"
        fill="#ff3131"
        stroke="#ff3131"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" />
      </svg>
    </BtnNav>
  );
};

export const ButtonRight = () => {
  return (
    <BtnNav>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 52 52"
        fill="#ff3131"
        stroke="#ff3131"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="Group 132" id="Group_132">
          <path d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z" />
        </g>
      </svg>
    </BtnNav>
  );
};

export const ButtonPlus = () => {
  return (
    <BtnPlus>
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
    </BtnPlus>
  );
};

const BtnNav = styled.button`
  border: none;
  background: #f6f6f6;
  cursor: pointer;
  width: 20px;
  margin: auto;
`;
const BtnPlus = styled.button`
  background: white;
  border: none;
  cursor: pointer;
`;
