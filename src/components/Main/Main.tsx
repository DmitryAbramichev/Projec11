import { AppShell, Text } from '@mantine/core';
import { VegetableCard } from './components/VegetableCard';
import { useAppContext } from '../../context';


export function Main() {
  const {vegetables} = useAppContext()
  return (
    <AppShell.Main bg={'#F3F5FA'} px={'80px'}>
      <Text fw={600} size={'32px'} py={'60px'}>
        Catalog
      </Text>
      <div
        style={{
          display: 'grid',
          rowGap: '28px',
          columnGap: '24px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(302px, 1fr))',
        }}
      >
        {vegetables.map((vegetable) => {
          return <VegetableCard vegetable={vegetable} />;
        })}
      </div>
    </AppShell.Main>
  );
}
