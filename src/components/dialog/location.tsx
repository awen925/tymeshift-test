import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';
import { LocationWithTimezone } from '../../types';
import { LocationInfo, IconBase } from '../base';
import CloseSVGIcon from '../../assets/icons/close.svg';

export const LocationDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  item: LocationWithTimezone;
  view: number | undefined;
}> = ({ open, onClose, item, view }) => {
  return (
    <Dialog open={open} onClose={onClose} data-testid="location-dialog">
      <DialogContent sx={{ width: { sm: '390px', xs: 'auto' }, p: '0 25px' }}>
        <Box
          py={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            lineHeight="24px"
            fontWeight={600}
            data-testid="dialog-name"
          >
            {item?.name || ''}
          </Typography>
          <IconBase src={CloseSVGIcon} alt="close modal" onClick={onClose} />
        </Box>
        <Box my={1.875}>
          <LocationInfo item={{ ...item, view }} />
          <Typography variant="body2" fontWeight={600} mt={2.5}>
            Description
          </Typography>
          <Typography variant="body2" fontWeight={400}>
            {item?.description || ''}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: '10px 25px' }}>
        <Button
          variant="contained"
          disableElevation
          onClick={onClose}
          sx={{ borderRadius: '16px' }}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};
