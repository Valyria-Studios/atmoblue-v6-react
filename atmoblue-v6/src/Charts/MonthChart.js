import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import data from "../Data/db.json";

export default function MonthChart() {
  return (
    <LineChart width={600} height={300} data={data.dataMonth}>
      <XAxis dataKey="day" />
      <YAxis yAxisId="left"/>
      <YAxis yAxisId="right" orientation="right" domain={[90, 100]} />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="cityPM" stroke="#17B5F0" name="City PM 2.5" />
      <Line yAxisId="left" type="monotone" dataKey="airPM" stroke="#1F4FA3" name="Average PM 2.5" />
      <Line yAxisId="right" type="monotone" dataKey="mask%" stroke="#4089C6" name="Particles Blocked" />
    </LineChart>
  )
}