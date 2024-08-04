import Geolocation from '@react-native-community/geolocation';
import {useEffect, useRef, useState} from 'react';

export const useWatchPosition = (options = {}) => {
  const [location, setLocation] = useState<locationType>({lat: 0, lng: 0});
  const [errors, setErrors] = useState<errorsType | null>(null);

  const locationWatchId = useRef(0);

  const handleSuccess = (position: {
    coords: {latitude: number; longitude: number};
  }) => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const handleError = (error: {code: number; message: string}) => {
    setErrors(error);
  };

  const cancelLocationWatch = () => {
    if (locationWatchId.current && Geolocation) {
      Geolocation.clearWatch(locationWatchId.current);
    }
  };

  useEffect(() => {
    locationWatchId.current = Geolocation.watchPosition(
      handleSuccess,
      handleError,
      options,
    );

    return cancelLocationWatch;
  }, [options]);

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
