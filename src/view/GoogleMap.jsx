import { useEffect, useRef } from "react";
const log = (...args) => console.log.apply(null, ["GoogleMap -->", ...args]);

export default function GoogleMap({ lat, lng ,zoom}) {
  const map = useRef(null);
  const mapDiv = useRef(null);
  

  async function createMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map.current = new Map(mapDiv.current, {
      center: { lat, lng },
      zoom: 8,
    });
  }
  useEffect(() => {
    createMap();
  }, []);

  useEffect(() => {
    if(!map.current) return;
    map.current.setCenter({ lat, lng });
  }, [lat, lng]);

  useEffect(()=> {
    if(!map.current) return;
    map.current.setZoom(zoom);
  },[zoom])

  return <div ref={mapDiv} className="map-box" />;
}
