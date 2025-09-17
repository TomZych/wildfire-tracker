import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker.jsx';
import LocationInfoBox from './LocationInfoBox.jsx';
import { useState } from 'react';


const Map = ({ eventData, center = { lat: 42.3265, lng: -122.8756 }, zoom = 6 }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map(ev => {
    if(ev.categories[0].id === 8) {
      return (
        <LocationMarker key={ev.id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
      );
    }
    return null;
  });
  return (
    <div className="map">
       <MapContainer center={[center.lat, center.lng]} zoom={zoom} style={{ height: "100vh", width: "100%" }}>
         <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         />
          {markers}
       </MapContainer>
       {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}


export default Map;
