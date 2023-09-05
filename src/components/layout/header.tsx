import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        padding: '19px 6px 21px',
        bgcolor: 'background.default',
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: '56px' },
        }}
      >
        <Box>
          <Typography
            variant="body1"
            fontWeight={700}
            letterSpacing={0.18}
            color="text.secondary"
          >
            All locations
          </Typography>
          <Typography variant="h1" fontWeight={600} color="text.primary">
            ACME Locations
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
