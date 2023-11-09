import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import data from "../Data/db.json"

export default function MaskWeekChart() {
  return (
    <LineChart width={600} height={300} data={data.dataWeek}>
      <XAxis dataKey="day" />
      <YAxis domain={[98, 100]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="mask%" stroke="#4089C6" name="Particles Blocked" />
    </LineChart>
  )
}