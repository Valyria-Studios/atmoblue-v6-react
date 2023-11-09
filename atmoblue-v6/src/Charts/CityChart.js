import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import data from "../Data/db.json";

export default function CityChart() {
  return (
    <LineChart width={600} height={300} data={data.dataCity}>
      <XAxis dataKey="time" />
      <YAxis yAxisId="left"/>
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="pm2.5" stroke="#17B5F0" name="PM 2.5" />
      <Line yAxisId="left" type="monotone" dataKey="pm10" stroke="#B1589B" name="PM 10" />
      <Line yAxisId="left" type="monotone" dataKey="SO2" stroke="#9AC34C" name="SO2" />
    </LineChart>
  )
}