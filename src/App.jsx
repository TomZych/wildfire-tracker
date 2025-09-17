import 'leaflet/dist/leaflet.css';
import Map from './components/Map.jsx';
import Header from './components/Header.jsx';
import Loading from './components/Loading.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
      const data = await res.json();
      console.log('Full response:', data);
      const events = data.events;
      console.log('Events fetched:', events);
      setEventData(events);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  fetchEvents();
}, []);


  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loading />}
    </div>
  )
}

export default App;
