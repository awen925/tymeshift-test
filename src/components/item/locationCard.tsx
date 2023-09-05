import React, { useCallback, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { LocationWithTimezone } from '../../types';
import { EditIcon, LocationInfo } from '../base';

interface LocationCardProps {
  item: LocationWithTimezone;
  view: number | undefined;
  onClick: () => void;
}

const LocationCard = ({ item, onClick, view }: LocationCardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleEdit = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    alert('This feature will be implemented in the near future');
  }, []);

  return (
    <Card
      square
      sx={{ minWidth: '340px', position: 'relative' }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-testid="location_card_body"
    >
      <Box
        position="absolute"
        right="10px"
        top="10px"
        display={isHovering ? 'block' : 'none'}
        onClick={handleEdit}
        data-testid="location_card_edit_icon"
      >
        <EditIcon />
      </Box>
      <CardContent>
        <Typography variant="h3" color="text.primary" fontWeight={700}>
          {item.name}
        </Typography>
        <LocationInfo item={{ ...item, view }} />
      </CardContent>
    </Card>
  );
};

export default LocationCard;
