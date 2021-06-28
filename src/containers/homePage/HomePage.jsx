import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Place from '../../components/place/Place';
import './HomePage.css';
import request from 'superagent';
import { setPlaces } from '../../redux/actions/places.actions';

const PLACES_URL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm'

const HomePage = () => {
  const places = useSelector(state => state.places);
  const placesDispatch = useDispatch();

  const loadPlaces = async () => {
    try {
      const response = await request.get(PLACES_URL)
        .set('X-RapidAPI-Key', 'e5c08b5234mshc4b2b1968631063p1668efjsn0cca401e9eae')
        .set('X-RapidAPI-Host', 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com');

      console.log(response.body);

      placesDispatch(setPlaces(response.body.Places));
      console.log(places)
    } catch (error) {

    console.log('ERROR');
      // indicate to the user (through notification or something else) what is wrong and if he can do about it
    }
  }

  return (
    <div className="homepage">
      <h1>Super API</h1>
      <button onClick={loadPlaces}>List places</button>
      {
        places.map(place => {
          console.log(place);
          return <Place
            key={place.PlaceId}
            placeId={place.PlaceId}
            placeName={place.PlaceName}
            countryId={place.CountryId}
            regionId={place.RegionId}
            cityId={place.CityId}
            countryName={place.CountryName}
          />
        })
      }
    </div>
  );
}

export default HomePage;
