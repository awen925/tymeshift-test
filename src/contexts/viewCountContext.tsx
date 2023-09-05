import React, { createContext, useContext, useState } from 'react';
import { Location } from '../types';

interface ViewCountContextValue {
  viewCounts: Record<string, number>;
  incrementViewCount: (itemId: Location['id']) => void;
}

export const ViewCountContext = createContext<
  ViewCountContextValue | undefined
>(undefined);

const ViewCountProvider = ({ children }: { children: React.ReactNode }) => {
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});

  const incrementViewCount = (itemId: Location['id']) => {
    setViewCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  return (
    <ViewCountContext.Provider value={{ viewCounts, incrementViewCount }}>
      {children}
    </ViewCountContext.Provider>
  );
};

export const useViewCount = (): ViewCountContextValue => {
  const context = useContext(ViewCountContext);
  if (!context) {
    throw new Error('useViewCount must be used within a ViewCountProvider');
  }
  return context;
};

export default ViewCountProvider;
