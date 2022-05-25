import { executePurchase } from '../purchase';

describe('purchase', () => {
  /** @TODO: [BONUS] Implement tests for the `executePurchase` function */
  it('execute purchase function', () => {
    const items = [
      {
        id: 1,
        name: 'test',
        inventory: 5,
        price: 5
      }
    ];
    executePurchase(1, { balance: 20, items }).then(({ balance, items }) => {
      expect(balance).toEqual(15);
      expect(items[0].inventory).toEqual(4);
    });
  });
});
