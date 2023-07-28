import React, { useState, createContext, ReactNode } from 'react';

// Define types for the context value and children prop
type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string;
  item: number;
};

type AppContextValue = [CartItem[], React.Dispatch<React.SetStateAction<CartItem[]>>];

type ProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextValue>([[], () => {}]);

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <AppContext.Provider value={[cart, setCart]}>
      {children}
    </AppContext.Provider>
  );
};
