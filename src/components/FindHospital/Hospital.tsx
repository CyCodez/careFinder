import React, { useState } from "react";
import {
  GoogleMap,
  StandaloneSearchBox,
  useLoadScript,
} from "@react-google-maps/api";
import "./hospital.css";
import { FaPhone } from "react-icons/fa";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: 9.082, // Latitude of the map center (Nigeria's latitude)
  lng: 8.6753, // Longitude of the map center (Nigeria's longitude)
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MapWithSearch: React.FC = () => {
  const [searchBox, setSearchBox] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  const onLoad = (ref: any) => {
    setSearchBox(ref);
  };

  const onPlaceChanged = () => {
    const places = searchBox.getPlaces();
    // Perform logic with the retrieved places (e.g., displaying hospital locations)
    setSearchResults(places);
  };

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;
  return (
    <div>
      <h3>Find Hospitals Near You</h3>
      <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlaceChanged}>
        <div className="container">
          <form className="mapform">
            <input type="search" placeholder="Search for a hospital" />
          </form>
        </div>
      </StandaloneSearchBox>

      <div className="search-results">
        {searchResults.map((place) => (
          <div key={place.id} className="search-result">
            <h3>{place.name}</h3>
            <p>
              {place.formatted_address} {place.email_address}
              <span>
                <img src={place.icon} alt="hospital-logo" />
              </span>
            </p>
            <FaPhone className="phone-icon" />
            <a
              href={`tel:${place.international_phone_number}`}
              className="hospital-phone"
            >
              {place.international_phone_number}
            </a>
            <p>{place.email}</p>
          </div>
        ))}
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={6}
        options={options}
      />
    </div>
  );
};

export default MapWithSearch;
