import { AppShell, Loader } from '@mantine/core';
import { useDataLoad } from './hooks';
import { Header, Main } from './components';
import { useState } from 'react';
import type { Vegetables } from './types';
import { AppContext } from './context';

interface Cart {
  vegetable: Vegetables;
  qty: number;
}

function App() {
  const { vegetables, loading } = useDataLoad();
  const [cart, setCart] = useState<Cart[]>([]);

  

  const addToCart = (vegetable: Vegetables, qty: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.vegetable.id === vegetable.id);
      if (existing) {
        return prev.map((item) => {
          return item.vegetable.id === vegetable.id
            ? { ...item, qty: item.qty + qty }
            : item;
        });
      }
      return [...prev, { vegetable, qty }];
    });
  };

  const removeToCart = (id: number, qty: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          return item.vegetable.id === id
            ? { ...item, qty: item.qty - qty }
            : item;
        })
        .filter((item) => item.qty > 0)
    );
  };



 const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.vegetable.price, 0)

  if (loading) {
    return (
      <div
      // style={{
      //   display: "grid",
      //   placeItems: "center",
      //   minHeight: "100vh",
      // }}
      >
        <Loader size={50} />
      </div>
    );
  }

  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppContext.Provider value={{cart, removeToCart, addToCart, vegetables, total: totalPrice}}>
      <Header />
      <Main />
      </ AppContext.Provider>
    </AppShell>
  );
}

export default App;
