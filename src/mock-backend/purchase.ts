import { Item } from './data';
import { sleep } from './utils';

type UserAndItemState = {
  balance: number;
  items: Item[];
};

/**
 * Modifies `state`, given an `itemId` to purchase
 * @returns {UserAndItemState} the updated state if a purchase should succeed
 */
export const executePurchase = async (
  itemId: Item['id'],
  state: UserAndItemState
): Promise<UserAndItemState> => {
  // NOTE: the following line intentionally pauses execution in this
  // function and MUST remain in tact for the assignment to replicate a
  // network request.
  await sleep(1000);
  // @TODO: Not implemented
  const { items, balance } = state;
  const item = items.find(_item => _item.id === itemId);
  if (!item || item.inventory === 0) {
    alert('No item');
    return state;
  }
  if (balance < item.price) {
    alert('No balance');
    return state;
  }
  
  const newBalance = balance - item.price;
  const newItems = items.map(_item => _item.id === item.id ? { ...item, inventory: item.inventory-1 } : _item);
  return {
    balance: newBalance,
    items: newItems
  };
};
