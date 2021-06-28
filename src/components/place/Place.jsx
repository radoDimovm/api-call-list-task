import React from 'react';
import './Place.css';


const Place = ({ placeName, countryId, regionId, cityId, countryName }) => {
  console.log('IN PLACE COMPONENT')

  return (
    <div className="place">
      <h2>{placeName}</h2>
      <h3>{countryName}</h3>
      <p>country id: {countryId}</p>
      <p>region id: {regionId}</p>
      <p>city id: {cityId}</p>
    </div>
  );
}

export default Place;
