import React, { useState } from "react";
import Footer from "./Footer";

export default function Calendar({ taskData }) {
  const [isTaskSelected, setTaskSelected] = useState(false);
  const [taskBackground, setTaskBackground] = useState("#ebecff");
  let setDate = 0;
  let setTime = 0;

  const handleClick = (setDate, setTime) => {
    console.log("🚀 ~ file: Calendar.js:9 ~ handleClick ~ setTime:", setTime);
    console.log("🚀 ~ file: Calendar.js:9 ~ handleClick ~ setDate:", setDate);
    setTaskSelected(!isTaskSelected);

    // if (isTaskSelected) {
    //   setTaskBackground("#b3b7ff");
    //   console.log(
    //     "🚀 ~ file: Calendar.js:7 ~ Calendar ~ taskBackground:",
    //     taskBackground
    //   );
    // } else {
    //   setTaskBackground("#ebecff");
    //   console.log(
    //     "🚀 ~ file: Calendar.js:7 ~ Calendar ~ taskBackground:",
    //     taskBackground
    //   );
    // }
    // console.log("Task selected: " + isTaskSelected);
  };
  return (
    <>
      <div
        style={{
          height: "555px",
          top: "-15px",
          zIndex: "0",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, minmax(8px, 1fr))",
            margin: "0",
          }}
        >
          {taskData.map((item, index) =>
            item.map((el, idx) => {
              return (
                // <div style={{ boxShadow: "0 0 0 1px gray, 0 0 0 2px white" }}>
                <div
                  key={idx}
                  style={{
                    cursor: el.timeStamp || !el.task ? "default" : "pointer",
                    backgroundColor: el.task ? "#ebecff" : "",
                    //backgroundColor: el.task && isTaskSelected ? taskBackground : "#fff",
                    padding: "2px",
                    paddingRight: el.timeStamp ? "0" : "2px",
                    borderBottom: el.timeStamp ? "none" : "1px solid lightgray",
                    borderRight:
                      el.timeStamp || idx === 7
                        ? "none"
                        : "1px solid lightgray",
                  }}
                  // onClick={() => {
                  // 	if (el.task) {
                  // 		const setDate = el.date
                  // 		const setTime = el.time
                  // 		handleClick(setDate, setTime)
                  // 		console.log(el.task)
                  // 	}
                  //   el.task && handleClick();
                  //   el.task
                  //     ? console.log("Date: " + el.date + " Time: " + el.time)
                  //     : console.log("No task");
                  // }}
                >
                  <div
                    style={{
                      background:
                        el.task &&
                        setDate === el.date &&
                        setTime === el.time &&
                        isTaskSelected
                          ? "#b3b7ff"
                          : "",
                      padding: "8px",
                    }}
                    onClick={() => {
                      if (el.task) {
                        setDate = el.date;
                        setTime = el.time;
                        handleClick(setDate, setTime);
                        console.log(el.task);
                      }
                      el.task && handleClick();
                      el.task
                        ? console.log("Date: " + el.date + " Time: " + el.time)
                        : console.log("No task");
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        padding: "15px",
                        paddingRight: el.timeStamp ? "0" : "10px",
                        top: "22px",
                        position: "relative",
                        color: "#c0c0c0",
                      }}
                    >
                      {el.timeStamp ? el.time + ":00" : ""}
                    </span>
                  </div>
                </div>
                // </div>
              );
            })
          )}
        </div>
      </div>
      <Footer isTaskSelected={isTaskSelected} />
    </>
  );
}
