import CityChart from "./Charts/CityChart";
import COInfo from "./Modals/COInfo";
import NO2Info from "./Modals/NO2Info";
import O3Info from "./Modals/O3Info";

export default function MyCity () {
  return (
    <div className="myCity">
      <h2>My City's PM 2.5</h2>
      <div className="cityPM">352</div>
      <h3>PM 2.5 in Beijing</h3>
      <p>Wear your mask when outdoors or reduce outdoor activities.</p>
      <CityChart />
      <div className="infoModals">
        <O3Info />
        <COInfo />
        <NO2Info />
      </div>
    </div>
  );
}