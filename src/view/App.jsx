import { useState } from "react";
import TopBar from "./TopBar";
import GoogleMap from "./GoogleMap";
import { useEffect, useRef } from "react";

// utility function
const log = (...args) => console.log.apply(null, ["App -->", ...args]);

export default function App() {
  
  
  const [zoom, setZoom] = useState(8);
  const [latlng, setLatlng] = useState({
    lat: -34.397,
    lng: 150.644
  });
  
  function reposition(city) {
    switch (city) {
      case "tel aviv":
        setLatlng({ lat: 32.0042938, lng: 34.7615399 });
        break;
      case "paris":
        setLatlng({ lat: 48.8589384, lng: 2.2646349 });
        break;
      case "london":
        setLatlng({ lat: 51.5287398, lng: -0.2664035 });
        break;    
      default:
        alert("Location not supported");
    }
  }
  function setZoomSize(e){
    let int = Number(e.target.value)
    setZoom(int)
  }


    log(latlng);
    return (
      <div className="app">
        <TopBar>Google Maps Example in React</TopBar>
        <div className="hbox mb20">
          <button onClick={() => reposition("tel aviv")}>Tel Aviv</button>
          <button onClick={() => reposition("paris")}>Paris</button>
          <button onClick={() => reposition("london")}>London</button>
          <input
            value={zoom}
            onChange={setZoomSize}
           type="number" min="8" max="16" placeholder="8" />
        </div>
        <GoogleMap lat={latlng.lat} lng={latlng.lng} zoom={zoom}/>
        {/* <GoogleMap {...latlng} /> */}
      </div>
    );
  
}
// int={Number(zoomSize)