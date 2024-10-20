import axios from 'axios';
import { useEffect, useState } from 'react';
import { LatLng } from 'react-native-maps';
import { GOOGLE_MAP_API_KEY } from '@env';
import { errorMessages } from '@/constants';

export const useGetAddress = (location: LatLng) => {
  const { latitude, longitude } = location;
  const [result, setResult] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address|route|political&key=${GOOGLE_MAP_API_KEY}&language=ko`,
        );

        const address = data.results.length
          ? data.results[0].formatted_address
          : `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

        setResult(address);
      } catch (e) {
        setResult(errorMessages.CANNOT_GET_ADDRESS);
      }
    })();
  }, [latitude, longitude]);

  return result;
};
