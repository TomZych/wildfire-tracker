import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';


const fireIcon = new L.Icon({
  iconUrl: 'https://api.iconify.design/mdi/fire-alert.svg?color=red',
  iconSize: [32, 32],
});

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <Marker position={[lat, lng]} icon={fireIcon} eventHandlers={{ click: onClick }} >
      <Popup>
        <span>You are here</span>
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
