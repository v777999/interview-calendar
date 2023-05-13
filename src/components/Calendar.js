import React from "react";
import { sameDay } from "../utils/utils";

export default function Calendar() {
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const startTime = 9;
  const endTime = 21;
  const timeSlots = endTime - startTime;
  // const task = { timeStamp: false, selected: false, time: 0, date: 0 };

  const currentDate = new Date();
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const currentWeek = dayNames.map((item, index) => {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay() + 1 + index);
    const dayOfWeek = {
      dayName: item,
      date: d.getDate(),
      currentDate: sameDay(d, new Date()),
    };
    return dayOfWeek;
  });

  const taskData = [];
  for (let i = 0; i < timeSlots; i++) {
    const hourData = [
      {
        timeStamp: true,
        selected: false,
        time: startTime + i,
        date: currentWeek[0],
      },
    ];
    // const hourData = []
    for (let d = 0; d < 7; d++) {
      hourData.push({
        timeStamp: false,
        selected: false,
        time: startTime + i,
        date: currentWeek[d],
      });
    }
    taskData.push(hourData);
  }
  console.log("🚀 ~ file: Calendar.js:53 ~ Calendar ~ taskData:", taskData);

  // const taskData = Array.from(Array(timeSlots).keys()).map((idx) => {
  //   let currentTask = Array.from(Array(7).keys()).map((index) => {
  //     const tmpTask = task;
  //     tmpTask.timeStamp = true;
  //     tmpTask.selected = false;
  //     tmpTask.time = startTime + idx;
  //     console.log(
  //       "🚀 ~ file: Calendar.js:46 ~ currentTask ~ task.time:",
  //       tmpTask.time
  //     );
  //     tmpTask.date = currentWeek[index];
  //     console.log("🚀 ~ file: Calendar.js:48 ~ currentTask ~ task:", tmpTask);

  //     return tmpTask;
  //   });

  //   return currentTask;
  // });
  // console.log("🚀 ~ file: Calendar.js:45 ~ taskData ~ taskData:", taskData);

  // const weekDates = Array.from(Array(7).keys()).map((idx) => {
  //   const d = new Date();
  //   d.setDate(d.getDate() - d.getDay() + 1 + idx);
  //   return d.getDate();
  // });

  return (
    <div>
      <div
        className="calendar"
        style={{
          boxSizing: "border-box",
          background: "#f6f6f6",
        }}
      >
        <div
          style={{
            padding: "10px 0 10px 12.5%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, minmax(8px, 1fr))",
            }}
          >
            {currentWeek.map((item, index) => (
              <h5
                key={index}
                style={{
                  margin: "10px auto",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {item.dayName[0]}
              </h5>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, minmax(8px, 1fr))",
              margin: "10px 0 10px",
            }}
          >
            {currentWeek.map((item, index) => (
              <h5
                key={index}
                style={{
                  margin: "auto",
                  fontSize: "24px",
                  fontWeight: "400",
                  color: item.currentDate ? "white" : "black",
                  background: item.currentDate ? "#ff3131" : "",
                  padding: item.currentDate ? "6px 10px" : "",
                  borderRadius: item.currentDate ? "50%" : "",
                }}
              >
                {item.date}
              </h5>
            ))}
          </div>
          <div
            style={{
              alignItems: "center",
              display: "grid",
              gridTemplateColumns: "1fr 5fr 1fr",
            }}
          >
            <button
              style={{
                border: "none",
                background: "#f6f6f6",
                cursor: "pointer",
                width: "20px",
                margin: "auto",
              }}
            >
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
            </button>
            <h5
              style={{
                margin: "auto",
                fontSize: "22px",
                fontWeight: "400",
              }}
            >
              {currentMonth} {currentYear}
            </h5>
            <button
              style={{
                border: "none",
                background: "#f6f6f6",
                cursor: "pointer",
                width: "20px",
                margin: "auto",
              }}
            >
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
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, minmax(8px, 1fr))",
          margin: "0",
        }}
      >
        {taskData.map((item, index) =>
          item.map((el, idx) => (
            <div
              key={idx}
              style={{
                cursor: el.timeStamp ? "" : "pointer",
                padding: "10px",
                borderBottom: "1px solid gray",
                borderRight: "1px solid",
              }}
              onClick={() => {
                console.log("Date: " + el.date.date + " Time: " + el.time);
              }}
            >
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "black",
                  padding: "15px",
                }}
              >
                {el.timeStamp ? el.time : ""}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
