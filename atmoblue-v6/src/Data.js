import { useState } from "react";
import DailyTable from "./Charts/DailyTable";
import HourlyTable from "./Charts/HourlyTable";
import Login from "./Login";
import Logout from "./Logout";

export default function Data() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const [activeTable, setActiveTable] = useState("hourly");

  const handleChange = (event) => {
    setActiveTable(event.target.value);
  };
  
  return(
    <>
      {isAuthenticated ? (
        <div className="data-table">
          <select onChange={handleChange} value={activeTable}>
            <option value="hourly">Hourly table</option>
            <option value="daily">Daily table</option>
            <option value="monthly">Monthly table</option>
            <option value="city">City table</option>
          </select>
          <Logout setIsAuthenticated={setIsAuthenticated} />
          {activeTable === "hourly" && <HourlyTable />}
          {activeTable === "daily" && <DailyTable />}
        </div>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  )
}