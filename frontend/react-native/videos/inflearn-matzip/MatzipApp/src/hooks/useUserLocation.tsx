import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { LatLng } from 'react-native-maps';
import { useAppState } from './useAppState';

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 37.5665,
    longitude: 126.978,
  });
  const [isUserLocationError, setIsUserLocationError] = useState(false);
  const { isComeback } = useAppState();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const { latitude, longitude } = info.coords;
        setUserLocation({ latitude, longitude });
        setIsUserLocationError(false);
      },
      () => {
        setIsUserLocationError(true);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, [isComeback]);

  return {
    userLocation,
    isUserLocationError,
  };
};
