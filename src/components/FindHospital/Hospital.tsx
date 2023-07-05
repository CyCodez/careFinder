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
  console.log(searchResults);
  // const phone = searchResults.international_phone_number;
  // console.log(phone);
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
        zoom={6} // Adjust the zoom level as needed
        options={options}
      />
    </div>
  );
};

export default MapWithSearch;

// import React, { useState } from "react";
// import {
//   GoogleMap,
//   StandaloneSearchBox,
//   useLoadScript,
// } from "@react-google-maps/api";
// import "./hospital.css";
// import { FaPhone } from "react-icons/fa";

// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const center = {
//   lat: 9.082, // Latitude of the map center (Nigeria's latitude)
//   lng: 8.6753, // Longitude of the map center (Nigeria's longitude)
// };
// const options = {
//   disableDefaultUI: true,
//   zoomControl: true,
// };

// const MapWithSearch: React.FC = () => {
//   const [searchBox, setSearchBox] = useState<any>(null);
//   const [selectedPlace, setSelectedPlace] = useState<any>(null);

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyByB7z7Xun7AvLkfRMAkkrHBENxt18m7lU",
//     libraries,
//   });

//   const onLoad = (ref: any) => {
//     setSearchBox(ref);
//   };

//   const onPlaceChanged = () => {
//     const places = searchBox.getPlaces();
//     if (places && places.length > 0) {
//       const place = places[0];
//       setSelectedPlace(place);

//       // Fetch additional details about the selected place
//       const placeService = new window.google.maps.places.PlacesService(
//         document.createElement("div")
//       );
//       placeService.getDetails(
//         { placeId: place.place_id },
//         (result: any, status: any) => {
//           if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//             console.log(result);
//             // You can access the email address and phone number from the `result` object and use them as needed
//           }
//         }
//       );
//     }
//   };

//   if (loadError) return <div>Error loading Google Maps</div>;
//   if (!isLoaded) return <div>Loading Google Maps...</div>;

//   return (
//     <div>
//       <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlaceChanged}>
//         <div className="container">
//           <h3>Find Hospitals Near You</h3>
//           <form className="mapform">
//             <input type="search" placeholder="Search for a hospital" />
//             <button type="submit" className="search">
//               Search
//             </button>{" "}
//           </form>{" "}
//         </div>
//       </StandaloneSearchBox>
//       {selectedPlace && (
//         <div className="search-result">
//           <h3>
//             {selectedPlace.name}
//             <img src={selectedPlace.icon} alt="hospital-logo" />
//           </h3>

//           <span className="hospital-address">
//             {" "}
//             {selectedPlace.formatted_address}
//           </span>

//           {/* <p>Email: {selectedPlace.formatted_email_address}</p> */}

//           <span style={{ marginLeft: "15px" }}>
//             <FaPhone className="phone-icon" />
//             <a
//               className="hospital-phone"
//               href={`tel:${selectedPlace.international_phone_number}`}
//             >
//               {selectedPlace.international_phone_number}
//             </a>
//           </span>
//         </div>
//       )}

//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={6} // Adjust the zoom level as needed
//         options={options}
//       />
//     </div>
//   );
// };

// export default MapWithSearch;
