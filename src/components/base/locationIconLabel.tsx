import { Box, Typography } from '@mui/material';
import React from 'react';
import { CardIcon } from './cardIcon';
import { LocationInfoIcons } from '../../config/locationInfoIcons';

export const LocationIconLabel: React.FC<{
  icon: 'Users' | 'Timezone' | 'Views';
  children?: React.ReactNode;
}> = ({ icon, children }) => {
  return (
    <Box display="flex" alignItems="center">
      <CardIcon src={LocationInfoIcons[icon]} alt={icon} />
      <Typography variant="body2" color="text.primary">
        {children}
      </Typography>
    </Box>
  );
};
