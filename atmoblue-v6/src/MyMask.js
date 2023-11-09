import { useState } from "react";
import MaskWeekChart from "./Charts/MaskWeekChart";
import MaskMonthChart from "./Charts/MaskMonthChart";
import MaskYearChart from "./Charts/MaskYearChart";

export default function MyMask () {
  const [activeChart, setActiveChart] = useState("Week");

  return (
    <div className="myMask">
      <h2>My Mask</h2>
      <h3>Your mask is blocking out</h3>
      <div className="blocked">99.97</div>
      <h3>of all PM 2.5 particulates</h3>
      <div className="myAirChart">
        <h3>My Air</h3>
        {activeChart === "Week" && <MaskWeekChart />}
        {activeChart === "Month" && <MaskMonthChart />}
        {activeChart === "Year" && <MaskYearChart />}
      </div>
      <div className="timeScale">
        <button onClick={() => setActiveChart("Week")}>Week</button>
        <button onClick={() => setActiveChart("Month")}>Month</button>
        <button onClick={() => setActiveChart("Year")}>Year</button>
      </div>
    </div>
  );
}