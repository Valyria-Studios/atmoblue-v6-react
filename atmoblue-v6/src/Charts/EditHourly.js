import { useState } from 'react';
import { db } from "../config/firestore";
import { doc, setDoc } from "firebase/firestore";

export default function EditHourly({ selectedEntry, setIsEditing }) {

  const [time, setTime] = useState(selectedEntry.time);
  const [cityPM, setCityPM] = useState(selectedEntry.cityPM);
  const [airPM, setAirPM] = useState(selectedEntry.airPM);
  const [maskP, setMaskP] = useState(selectedEntry.maskP);
  const id = selectedEntry.id;

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedEntry = {
      time,
      cityPM,
      airPM,
      maskP,
    }

    await setDoc(doc(db, "hourly", id), {
      ...updatedEntry
    });
    
    console.log("Complete");
    setIsEditing(false);
  };

  return (
    <>
    <form onSubmit={handleUpdate}>
      <h2>Edit Entry</h2>
      <label htmlFor="time">Time</label>
      <input id="time" type="text" value={time} onChange={e => setTime(e.target.value)}/>
      <label htmlFor="cityPM">City PM</label>
      <input id="cityPM" type="number" name="cityPM" value={cityPM} onChange={e => setCityPM(e.target.value)}/>
      <label htmlFor="airPM">Air PM</label>
      <input id="airPM" type="number" name="airPM" value={airPM} onChange={e => setAirPM(e.target.value)}/>
      <label htmlFor="maskP">Mask %</label>
      <input id="maskP" type="number" name="maskP" value={maskP} onChange={e => setMaskP(e.target.value)}/>
      <input type="submit" value="Update"/>
      <input type="button" value="Cancel" onClick={() => setIsEditing(false)}/>
    </form>
    </>
  );
}