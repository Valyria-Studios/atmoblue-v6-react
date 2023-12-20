import { collection, addDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firestore";
import { useState } from 'react';

export default function HourlyTable() {

  const hourlyCollectionRef = collection(db, "hourly");

  const [hourlyData, setHourlyData] = useState();

  onSnapshot(hourlyCollectionRef, (snapshot) => {
    const data = []
    snapshot.docs.forEach((doc) => {
      data.push({...doc.data(), id: doc.id })
    })
    setHourlyData(data)
  })

  const [newTime, setNewTime] = useState("")
  const [newCityPM, setNewCityPM] = useState(0)
  const [newAirPM, setNewAirPM] = useState(0)
  const [newMaskP, setNewMaskP] = useState(0)

  const createHourly = async (e) => {
    e.preventDefault();

    await addDoc(hourlyCollectionRef, { time: newTime, cityPM: newCityPM, airPM: newAirPM, maskP: newMaskP });
  };

  const handleDelete = async (id) => {
    const hourly = doc(db, "daily", id);
    
    await deleteDoc(hourly);
  }

  return (
    <div>
      <form className="input-form">
          <input placeholder="Time" onChange={(event) => {setNewTime(event.target.value);}}/>
          <input placeholder="City PM" onChange={(event) => {setNewCityPM(event.target.value);}}/>
          <input placeholder="Air PM" onChange={(event) => {setNewAirPM(event.target.value);}}/>
          <input placeholder="Mask %" onChange={(event) => {setNewMaskP(event.target.value);}}/>
          <button onClick={createHourly}> Create new hourly entry</button>
        </form>
      <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Time</th>
              <th>City PM</th>
              <th>Air PM</th>
              <th>Mask %</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hourlyData ? (
              hourlyData.map((hourly, i) => (
                <tr key={hourly.time}>
                  <td>{hourly.id}</td>
                  <td>{hourly.time}</td>
                  <td>{hourly.cityPM}</td>
                  <td>{hourly.airPM}</td>
                  <td>{hourly.maskP}</td>
                  <td className="text-right">
                    <button>Edit</button>
                  </td>
                  <td className="text-left">
                    <button onClick={() => handleDelete(hourly.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};