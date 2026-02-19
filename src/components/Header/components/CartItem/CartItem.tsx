import { Text } from '@mantine/core';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { addToCart, removeFromCart } from '../../../../store/cartSlice';
import type { CartItem as CartItemType } from '../../../../store/types';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item.product.id, qty: 1 }));
  };

  const handleIncrease = () => {
    dispatch(addToCart({ product: item.product, qty: 1 }));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img
          src={item.product.image}
          alt={item.product.name}
          style={{ width: '64px', height: '64px', borderRadius: '8px' }}
        />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Text size="sm" fw={700}>
          {item.product.name}
        </Text>
        <Text size="sm" fw={700}>
          ${item.product.price}
        </Text>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90px',
              height: '30px',
            }}
          >
            <button className="counter" onClick={handleDecrease} disabled={item.qty === 1}>
              -
            </button>
            <span>{item.qty}</span>
            <button className="counter" onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}