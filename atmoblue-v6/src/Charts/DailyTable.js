import { collection, addDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firestore";
import { useState } from 'react';

export default function DailyTable() {

  const dailyCollectionRef = collection(db, "daily");

  const [dailyData, setDailyData] = useState();

  onSnapshot(dailyCollectionRef, (snapshot) => {
    const data = []
    snapshot.docs.forEach((doc) => {
      data.push({...doc.data(), id: doc.id })
    })
    setDailyData(data)
  })

  const [newDate, setNewDate] = useState("")
  const [newCityPM, setNewCityPM] = useState(0)
  const [newAirPM, setNewAirPM] = useState(0)
  const [newMaskP, setNewMaskP] = useState(0)

  const createDaily = async (e) => {
    e.preventDefault();

    await addDoc(dailyCollectionRef, { date: newDate, cityPM: newCityPM, airPM: newAirPM, maskP: newMaskP });
  };

  const handleDelete = async (id) => {
    const daily = doc(db, "daily", id);
    
    await deleteDoc(daily);
  }

  return (
    <div>
      <form className="input-form">
        <input placeholder="Date" onChange={(event) => {setNewDate(event.target.value);}}/>
        <input placeholder="City PM" onChange={(event) => {setNewCityPM(event.target.value);}}/>
        <input placeholder="Air PM" onChange={(event) => {setNewAirPM(event.target.value);}}/>
        <input placeholder="Mask %" onChange={(event) => {setNewMaskP(event.target.value);}}/>
        <button onClick={createDaily}> Create new daily entry</button>
      </form>
      <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>City PM</th>
              <th>Air PM</th>
              <th>Mask %</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dailyData ? (
              dailyData.map((daily, i) => (
                <tr key={daily.time}>
                  <td>{daily.id}</td>
                  <td>{daily.date}</td>
                  <td>{daily.cityPM}</td>
                  <td>{daily.airPM}</td>
                  <td>{daily.maskP}</td>
                  <td className="text-right">
                    <button>Edit</button>
                  </td>
                  <td className="text-left">
                    <button onClick={() => handleDelete(daily.id)}>Delete</button>
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