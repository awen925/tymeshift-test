import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      data-testid="loader"
    >
      <CircularProgress />
    </Box>
  );
};
