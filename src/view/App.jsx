import { useState } from "react";
import TopBar from "./TopBar";
import GoogleMap from "./GoogleMap";

// utility function
const log = (...args) => console.log.apply(null, ["App -->", ...args]);

export default function App() {

  const [latlng, setLatlng] = useState({
    lat: -34.397,
    lng: 150.644
  });

  function reposition(city) {
    switch (city) {
      case "tel aviv":
        setLatlng({ lat: 32.0042938, lng: 34.7615399 });
        break;
      default:
        alert("Location not supported");
    }
  }


    log(latlng);
    return (
      <div className="app">
        <TopBar>Google Maps Example in React</TopBar>
        <div className="hbox mb20">
          <button onClick={() => reposition("tel aviv")}>Tel Aviv</button>
          <input type="number" min="8" max="16" placeholder="8" />
        </div>
        <GoogleMap lat={latlng.lat} lng={latlng.lng} />
        {/* <GoogleMap {...latlng} /> */}
      </div>
    );
  
}
