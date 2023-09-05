import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';

import { muiTheme } from './config/muiTheme';
import ViewCountProvider from './contexts/viewCountContext';
import { ErrorBoundary } from 'react-error-boundary';

const LocationPage = React.lazy(() => import('./pages/location'));
const PageError = React.lazy(() => import('./pages/error/500'));

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider theme={muiTheme()}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          FallbackComponent={PageError}
          onReset={() => window.location.replace('/')}
        >
          <BrowserRouter>
            <ViewCountProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<>Loading...</>}>
                      <LocationPage />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ViewCountProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
