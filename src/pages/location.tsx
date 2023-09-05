import React, { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import Layout from '../components/layout';
import LocationCard from '../components/item/locationCard';
import { LocationDialog } from '../components/dialog/location';
import { useLocations } from '../queries/useLocations';
import { useViewCount } from '../contexts/viewCountContext';
import { LocationWithTimezone } from '../types';

const LocationPage = () => {
  const { data, isLoading, error } = useLocations();
  const [open, setOpen] = useState<boolean>(false);
  const [item, setItem] = useState<LocationWithTimezone>();
  const { viewCounts, incrementViewCount } = useViewCount();

  const handleCardClick = useCallback(
    (location: LocationWithTimezone) => {
      setItem(location);
      setOpen(true);
      incrementViewCount(location.id);
    },
    [incrementViewCount]
  );

  return (
    <Layout loading={isLoading} error={error}>
      <Box
        display="flex"
        flexWrap="wrap"
        rowGap={3.125}
        sx={{ justifyContent: { xs: 'space-evenly', lg: 'space-between' } }}
        data-testid="card-container"
      >
        {data?.map((location: LocationWithTimezone) => (
          <LocationCard
            key={location.id}
            item={location}
            view={viewCounts[location.id]}
            onClick={() => handleCardClick(location)}
          />
        ))}
        {item && (
          <LocationDialog
            open={open}
            onClose={() => setOpen(false)}
            item={item}
            view={viewCounts[item.id]}
          />
        )}
      </Box>
    </Layout>
  );
};

export default LocationPage;
