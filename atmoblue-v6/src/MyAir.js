import { useState } from "react";
import DayChart from "./Charts/DayChart";
import WeekChart from "./Charts/WeekChart";
import MonthChart from "./Charts/MonthChart";
import YearChart from "./Charts/YearChart";

export default function MyAir() {
  let avgConsumption = 25;
  let location = "Beijing, Sanlitun";
  let envPM2 = "352";
  let maskPM2 = "1";
  const [activeChart, setActiveChart] = useState("24 hours");

  return (
    <div className="myAir">
      <h2>My Air</h2>
      <div className="avgConsumption">{ avgConsumption }</div>
      <h3>My Average PM 2.5 Consumption</h3>
      <p>This is over the WHO recommendation of 10 micrograms of PM 2.5 over the course of a year. 
      Make sure to wear your mask and keep your air purifiers on indoors!</p>
      <div className="myAirChart">
        <h3>My Air</h3>
        {activeChart === "24 hours" && <DayChart />}
        {activeChart === "Week" && <WeekChart />}
        {activeChart === "Month" && <MonthChart />}
        {activeChart === "Year" && <YearChart />}
      </div>
      <div className="timeScale">
        <button onClick={() => setActiveChart("24 hours")}>24 hours</button>
        <button onClick={() => setActiveChart("Week")}>Week</button>
        <button onClick={() => setActiveChart("Month")}>Month</button>
        <button onClick={() => setActiveChart("Year")}>Year</button>
      </div>
      <div className="infoList">
        <ul>
          <li><b>Date:</b> {new Date().toLocaleDateString() + ""}</li>
          <li><b>Time:</b> {new Date().toLocaleTimeString() + ""}</li>
          <li><b>Location:</b> {location}</li>
          <li><b>Environmental PM 2.5:</b> {envPM2}</li>
          <li><b>Mask PM 2.5:</b> {maskPM2}</li>
        </ul>
      </div>
    </div>
  );
}