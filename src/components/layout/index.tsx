import React from 'react';
import { Box, Divider } from '@mui/material';
import Header from './header';
import { Loader } from '../base';
import { PageError } from '../base/pageError';

interface LayoutProps {
  children?: React.ReactNode;
  error?: any;
  loading?: boolean;
}

const Layout = ({ children, loading, error }: LayoutProps) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <PageError />;
  }

  return (
    <Box>
      <Header />
      <Divider />
      <Box px={7.5} py={3.125}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
