import { useRef } from "react";

export default function O3Info() {
  const dialogRef = useRef();

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const onCancel = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="modal">
        <div className="modalTop">
          <h3>Ozone</h3>
          <button onClick={onCancel}>X</button>
        </div>
        <p>Unlike the good, protective ozone layer in the stratosphere, ground level ozone is a harmful air pollutant
        that affects all of us. It's formed when emissions from everyday items combine with other pollutants and 
        "cook" in the heat and sunlight. Sources of such emissions include local industry, gasoline-powered vehicles
        and lawn equipment, and household paints, stains and solvents. Weather plays a key role in ozone formation.
        The highest ozone levels are usually recorded in summer months when temperatures approach the high 80s and
        90s and the wind is stagnant or light.</p>
        <p>At ground level, ozone is a health hazard for all of us, especially the young and elderly. Those who are
        active and excercising outdoors may experience breathing difficulties and eye irritation. Prolonged exposure
        may result in reduced resistance to lung infections and colds. Ozone can also trigger attacks and symptoms in
        individuals with pre-existing conditions, like asthma or other respiratory infections like chronic bronchitis
        and COPD (Chronic Obstructive Pulmonary Disease).</p>
      </dialog>
      <button onClick={openModal}>O3</button>
    </>
  );
}