import Geolocation from '@react-native-community/geolocation';
import {useEffect, useRef, useState} from 'react';

export const useWatchPosition = () => {
  const [location, setLocation] = useState<locationType>({lat: 0, lng: 0});
  const [errors, setErrors] = useState<errorsType | null>(null);

  const locationWatchId = useRef(0);

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

  const cancelLocationWatch = () => {
    if (locationWatchId.current && Geolocation) {
      Geolocation.clearWatch(locationWatchId.current);
    }
  };

  useEffect(() => {
    locationWatchId.current = Geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 1000 * 60 * 1,
      maximumAge: 1000 * 3600 * 24,
    });

    return cancelLocationWatch;
  }, []);

  return {location, cancelLocationWatch, errors};
};

interface locationType {
  lat: number;
  lng: number;
}

interface errorsType {
  code: number;
  message: string;
}
