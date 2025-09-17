const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
        
        </div>
    )
};

export default LocationInfoBox;

// note to self: currently the info box does not appear and popup is the only 
// thing displaying any value need to fix