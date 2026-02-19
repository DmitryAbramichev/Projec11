import { AppShell, Loader } from '@mantine/core';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchProducts } from './store/productsSlice';
import { Header, Main } from './components';

function App() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
        <Loader size={50} />
      </div>
    );
  }

  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <Header />
      <Main />
    </AppShell>
  );
}

export default App;