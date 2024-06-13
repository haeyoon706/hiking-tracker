import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

export const DEFAULT_LOCATION = {lat: 41.9930135, lng: 128.0671759};

const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: DEFAULT_LOCATION,
  });

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
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error: {code: number; message: string}) => {
    setLocation({
      loaded: true,
      coordinates: DEFAULT_LOCATION,
      error,
    });
  };

  return location;
};

export default useGeolocation;

interface locationType {
  loaded: boolean;
  coordinates: {lat: number; lng: number};
  error?: {code: number; message: string};
}
