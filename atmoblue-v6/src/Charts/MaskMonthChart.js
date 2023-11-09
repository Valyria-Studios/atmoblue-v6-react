import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import data from "../Data/db.json"

export default function MaskMonthChart() {
  return (
    <LineChart width={600} height={300} data={data.dataMonth}>
      <XAxis dataKey="day" />
      <YAxis domain={[98, 100]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="mask%" stroke="#4089C6" name="Particles Blocked" />
    </LineChart>
  )
}