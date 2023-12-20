import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
// import data from "../Data/db.json";

export default function DayChart() {

  const [hourlyData, setHourlyData] = useState();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "hourly"));
    const hourlyData = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setHourlyData(hourlyData)
    console.log(hourlyData);
  }
  
  useEffect(() => {
    getData()
  }, []);

  return (
    <LineChart width={600} height={300} data={hourlyData}>
      <XAxis dataKey="time" />
      <YAxis yAxisId="left"/>
      <YAxis yAxisId="right" orientation="right" domain={[90, 100]} />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="cityPM" stroke="#17B5F0" name="City PM 2.5" />
      <Line yAxisId="left" type="monotone" dataKey="airPM" stroke="#1F4FA3" name="Average PM 2.5" />
      <Line yAxisId="right" type="monotone" dataKey="maskP" stroke="#4089C6" name="Particles Blocked" />
    </LineChart>
  )
}