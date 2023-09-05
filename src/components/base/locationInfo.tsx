import { useCallback, useEffect, useState } from 'react';
import { LocationIconLabel } from './locationIconLabel';
import { formatNumber, getCurrentTimeByTimezone } from '../../utils';
import { LocationView } from '../../types';

interface LocationInfoProps {
  item: LocationView | undefined;
}

export const LocationInfo = ({ item }: LocationInfoProps) => {
  const [currentTime, setCurrentTime] = useState(
    getCurrentTimeByTimezone(item?.timezone || 0)
  );

  // Function to update the current time
  const updateCurrentTime = useCallback(() => {
    setCurrentTime(getCurrentTimeByTimezone(item?.timezone || 0));
  }, [item]);

  useEffect(() => {
    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, [updateCurrentTime]);

  return (
    <>
      <LocationIconLabel icon="Users">
        {formatNumber(item?.userCount || 0)} Users
      </LocationIconLabel>
      <LocationIconLabel icon="Timezone">{currentTime}</LocationIconLabel>
      <LocationIconLabel icon="Views">
        {formatNumber(item?.view || 0)} Views
      </LocationIconLabel>
    </>
  );
};
