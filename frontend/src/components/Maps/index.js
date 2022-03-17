import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getKey } from '../../store/maps';
import Maps from './Maps';

const MapContainer = () => {
  const dispatch = useDispatch();
  const key = useSelector((state) => state.maps.key);

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }

  return (
    <Maps apiKey={key.googleMapsAPIKey} geocodeKey={key.googleMapsAPIKeyGeocode} />
  );
};

export default MapContainer;
