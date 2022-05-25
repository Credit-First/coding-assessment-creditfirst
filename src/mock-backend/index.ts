import { useCallback, useState } from 'react';
import { initialBalance, initialItems, Item } from './data';
import { executePurchase } from './purchase';

type UseCheckout = {
  items: Item[];
  balance: number;

  /**
   * Charges the current account with the `price` in USD and decrements an item's inventory
   *
   * @throws if the current account does not have enough or if no inventory
   *
   */
  buy: (itemId: Item['id']) => Promise<void>;
};

export const useCheckout = (): UseCheckout => {
  const [state, setState] = useState({ items: initialItems, balance: initialBalance });

  const handleBuy = useCallback((itemId: Item['id']) => {
    return executePurchase(itemId, state).then(({ balance, items }) => {
      const zeroItems = items.filter(_item => _item.inventory === 0);
      const noneZeroItems = items.filter(_item => _item.inventory > 0);
      setState({
        balance,
        items: [...noneZeroItems, ...zeroItems]
      });
    }).catch((error) => console.log(error));
  }, [state]);

  // @TODO: Not implemented
  return {
    buy: handleBuy,
    items: state.items, // @TODO: Not implemented
    balance: state.balance,
  };
};
