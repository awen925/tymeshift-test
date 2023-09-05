import { Box, Typography } from '@mui/material';

export const PageError = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="body1">
        Something went wrong. Please try again after a few minutes
      </Typography>
    </Box>
  );
};
