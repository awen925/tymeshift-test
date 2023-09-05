import { Box } from '@mui/material';
import EditSVGICon from '../../assets/icons/edit.svg';
import { IconBase } from './iconBase';

export const EditIcon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '26px',
        height: '26px',
        bgcolor: 'background.default',
        borderRadius: '50%',
        border: '1px solid transparent',

        '&:hover': {
          border: '1px solid',
          borderColor: 'text.disabled',
          transition: '0.2s ease-out',
        },
      }}
    >
      <IconBase src={EditSVGICon} alt="Edit" />
    </Box>
  );
};
