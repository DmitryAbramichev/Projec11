import { Card, Group, Button, Text, Image } from '@mantine/core';
import { useState } from 'react';
import { Tracker } from '../Tracker';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { addToCart } from '../../../../store/cartSlice';
import type { Product } from '../../../../store/types';

interface VegetableCardProps {
  product: Product;
}

export function VegetableCard({ product }: VegetableCardProps) {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    dispatch(addToCart({ product, qty: count }));
  };

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
      <Card.Section style={{ marginBottom: 16 }}>
        <Image
          src={product.image}
          alt={product.name}
          height={270}
          width={270}
          style={{ width: '270px', height: '270px', margin: '10px' }}
        />
      </Card.Section>

      <Group justify="space-between">
        <Text fw={500}>{product.name}</Text>
        <Tracker count={count} setCount={setCount} />
      </Group>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 'auto',
        }}
      >
        <Text fw={600} style={{ fontSize: '18px' }}>
          $ {product.price}
        </Text>

        <Button
          color={isActive ? '#3B944E' : '#54B46A'}
          radius="md"
          style={{ width: '204px', height: '44px', color: '#E7FAEB' }}
          onClick={handleClick}
        >
          Add to cart <img src="src/cart.png" alt="" />
        </Button>
      </div>
    </Card>
  );
}