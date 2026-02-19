import { Popover, Button, Badge } from '@mantine/core';
import { CartItem } from './CartItem/CartItem';
import { useAppSelector } from '../../../hooks/reduxHooks';

export function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.qty * item.product.price, 0);

  return (
    <Popover width={444} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button color="#54B46A">
          {cartItems.length > 0 && (
            <Badge mr={10} size="xs" circle variant="white" color="black">
              {cartItems.length}
            </Badge>
          )}
          Cart <img src="src/cart.png" alt="" />
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        {total > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>Total</p>
            <div>$ {total}</div>
          </div>
        )}
      </Popover.Dropdown>
    </Popover>
  );
}