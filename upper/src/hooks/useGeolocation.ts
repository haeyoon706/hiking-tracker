import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

export const DEFAULT_LOCATION = {lat: 41.9930135, lng: 128.0671759};

const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>(DEFAULT_LOCATION);
  const [errors, setErrors] = useState<errorsType | null>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    });
  }, []);

  const onSuccess = (position: {
    coords: {latitude: number; longitude: number};
  }) => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const onError = (error: {code: number; message: string}) => {
    setErrors(error);
  };

  return {location, errors};
};

export default useGeolocation;

interface locationType {
  lat: number;
  lng: number;
}

interface errorsType {
  code: number;
  message: string;
}
