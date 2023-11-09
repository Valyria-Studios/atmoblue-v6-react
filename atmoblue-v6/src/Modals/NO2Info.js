import { useRef } from "react";

export default function NO2Info() {
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
          <h3>Nitrogen Oxide</h3>
          <button onClick={onCancel}>X</button>
        </div>
        <p>Nitrogen Dioxide (NO2) is one of a group of highly reactive gases known as oxides of nitrogen or nitrogen 
        oxides (NOx). Other nitrogen oxides include nitrous acid and nitric acid. NO2 is used as the indicator for the 
        larger group of nitrogen oxides.</p>
        <p>N02 primarily gets in the air from the burning of fuel. NO2 forms from emissions from cars, trucks and buses, 
        power plants, and off-road equipment.</p>
        <p>Breathing air with a high concentration of NO2 can irritate airways in the human respiratory system.</p>
        <p>Such exposures over short periods can aggravate respiratory diseases, particularly asthma, leading to 
        respiratory symptoms (such as coughing, wheezing or difficulty breathing), hospital admissions and visits to 
        emergency rooms. Longer exposures to elevated concentrations of NO2 may contribute to the development of asthma 
        and potentially increase susceptibility to respiratory infections. People with asthma, as well as children and 
        the elderly are generally at greater risk for the health effects of NO2.</p>
        <p>NO2 along with other NOx reacts with other chemicals in the air to form both particulate matter and ozone. 
        Both of these are also harmful when inhaled due to effects on the respiratory system.</p>
      </dialog>
      <button onClick={openModal}>NO2</button>
    </>
  );
}