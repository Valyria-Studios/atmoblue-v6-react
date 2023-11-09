import { useRef } from "react";

export default function COInfo() {
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
          <h3>Carbon Monoxide</h3>
          <button onClick={onCancel}>X</button>
        </div>
        <p>CO is a colorless, odorless gas that can be harmful when inhaled in large amounts. CO is released when 
        something is burned. The greatest sources of CO to outdoor air are cars, trucks and other vehicles or machinery 
        that burn fossil fuels. A variety of items in your home such as unvented kerosene and gas space heaters, 
        leaking chimneys and furnaces, and gas stoves also release CO and can affect air quality indoors.</p>
        <p>Breathing air with a high concentration of CO reduces the amount of oxygen that can be transported in the 
        blood stream to critical organs like the heart and brain.</p>
        <p>At very high levels, which are possible indoors or in other enclosed environments, CO can cause dizziness, 
        confusion, unconsciousness and death.</p>
        <p>Very high levels of CO are not likely to occur outdoors. However, when CO levels are elevated outdoors, they 
        can be of particular concern for people with some types of heart disease. These people already have a reduced 
        ability for getting oxygenated blood to their hearts in situations where the heart needs more oxygen than usual. 
        They are especially vulnerable to the effects of CO when exercising or under increased stress. In these situations, 
        short-term exposure to elevated CO may result in reduced oxygen to the heart accompanied by chest pain also known as 
        angina.</p>
      </dialog>
      <button onClick={openModal}>CO</button>
    </>
  );
}