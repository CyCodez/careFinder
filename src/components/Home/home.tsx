import React, { useState } from "react";
import care from "./careImg.jpg";
import "./home.css";
import { useLoadScript } from "@react-google-maps/api";
import FooterLayout from "../FooterLayout";

const libraries = ["places"];
function HomePage(): React.JSX.Element {
  const [searchBox, setSearchBox] = useState<any>(null);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyByB7z7Xun7AvLkfRMAkkrHBENxt18m7lU",
    libraries,
  });

  const onLoad = (ref: any) => {
    setSearchBox(ref);
  };

  const onPlaceChanged = () => {
    const places = searchBox.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      setSelectedPlace(place);

      // Fetch additional details about the selected place
      const placeService = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      placeService.getDetails(
        { placeId: place.place_id },
        (result: any, status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            console.log(result);
          }
        }
      );
    }
  };

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="home-Container">
        <div className="homeText1">
          <h2 className="flex1s">
            Find The nearest hospital to you and make an appointment today
          </h2>
          <div className="flex1s">
            <p className="para1">
              Discover Quality Care Services Near You Find Compassionate Care
              Providers in Your Area, Your Trusted Guide to Exceptional Care
              Services.
            </p>
          </div>
          <div className="flex1s">
            <button className="startBtn">
              <span className="startText">GET STARTED</span>
            </button>
          </div>
          <div className="flex1s">
            <p className="para1">Learn more</p>
          </div>
        </div>
        <div className="photoContainer">
          <img className="carePhoto" src={care} alt="care Photo" />
        </div>
      </div>
      <p className="find-text">
        Signup to find a nearby hospital and receive quality health care service
        today
      </p>
      <FooterLayout />
    </>
  );
}
export default HomePage;
