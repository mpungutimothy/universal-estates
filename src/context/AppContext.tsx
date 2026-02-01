import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AppContextType = {
  favorites: string[];
  toggleFavorite: (propertyId: string) => void;
  compareList: string[];
  toggleCompare: (propertyId: string) => void;
  clearCompare: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (propertyId: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const toggleCompare = (propertyId: string) => {
    setCompareList((prev) => {
      if (prev.includes(propertyId)) {
        return prev.filter((id) => id !== propertyId);
      }
      if (prev.length >= 4) {
        alert('You can only compare up to 4 properties');
        return prev;
      }
      return [...prev, propertyId];
    });
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        compareList,
        toggleCompare,
        clearCompare,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
