import { Card, Group, Button, Text, Image} from '@mantine/core';
import type { Vegetables } from '../../../../types';
import { useState } from 'react';
import { Tracker } from '../Tracker';
import { useAppContext } from '../../../../context';

interface VegetableCardProps {
  vegetable: Vegetables;
}

export function VegetableCard({ vegetable }: VegetableCardProps) {
   const {addToCart} = useAppContext()
   const [isActive, setIsActive] = useState(false)
   const handleClick = () => {
    setIsActive(!isActive)
    addToCart(vegetable, count);
   }

  const [count, setCount] = useState(1);

  return (
    <Card
      w={302}
      h={412}
      shadow="sm"
      radius="md"
      withBorder
      padding={16}
      style={{
        width: '302px',
        height: '412px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Картинка */}
      <Card.Section style={{ marginBottom: 16 }}>
        {' '}
        {/* Отступ между картинкой и названием */}
        <Image
          src={vegetable.image}
          alt={vegetable.name}
          height={270}
          width={270}
          style={{
            width: '270px',
            height: '270px',
            margin: '10px',
          }}
        />
      </Card.Section>

      {/* Название */}
      <Group justify="space-between">
        {' '}
        {/* Отступ между названием и ценой */}
        <Text fw={500}>{vegetable.name}</Text>
        <Tracker count={count} setCount={setCount} />
      </Group>

      {/* Цена и кнопка */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 'auto',
        }}
      >
        <Text fw={600} style={{ fontSize: '18px' }}>
          $ {vegetable.price}
        </Text>

        <Button
          color={isActive ? "#3B944E" : "#54B46A"}
          radius="md"
          style={{
            width: '204px',
            height: '44px',
            color: '#E7FAEB'
          }}
          onClick={handleClick}
        >
          Add to cart  <img src="src/cart.png" alt=""/>
        </Button>
      </div>
    </Card>
  );
}
