import { useState } from "react";
import DailyTable from "./Charts/DailyTable";
import HourlyTable from "./Charts/HourlyTable";

export default function Data() {

  const [activeTable, setActiveTable] = useState("hourly");

  const handleChange = (event) => {
    setActiveTable(event.target.value);
  };
  
  return(
    <div className="data-table">
      <select onChange={handleChange} value={activeTable}>
        <option value="hourly">Hourly table</option>
        <option value="daily">Daily table</option>
        <option value="monthly">Monthly table</option>
        <option value="city">City table</option>
      </select>

      {activeTable === "hourly" && <HourlyTable />}
      {activeTable === "daily" && <DailyTable />}
    </div>
  )
}