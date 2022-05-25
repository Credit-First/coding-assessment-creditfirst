import * as React from 'react';
import { useCheckout } from '../mock-backend';
import { Item } from '../mock-backend/data';

const Index = () => {
  const { items, buy, balance } = useCheckout();

  return (
    <main className='bg-zinc-900 p-8 h-screen'>
      <div className='flex items-center justify-between'>
        <div className='text-5xl text-white'>Create, Inc. Store </div>
        <div className='text-3xl text-white'>{balance} $</div>
      </div>
      {/** @TODO: Not implemented */}
      <div className='w-full mt-16 rounded-xl border-[1px] border-[grey] p-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {
            items.map((item: Item) => (
              <div key={item.id} className='flex flex-col items-center justify-center rounded-xl border-2 border-white p-4 text-white'>
                <div className='flex items-center justify-center mb-4'>
                  <div className='mr-4'>
                    <div className='flex justify-end items-center'>Id:</div>
                    <div className='flex justify-end items-center'>Name:</div>
                    <div className='flex justify-end items-center'>Price:</div>
                    <div className='flex justify-end items-center'>Inventory:</div>
                  </div>
                  <div className=''>
                    <div className=''>{item.id}</div>
                    <div className=''>{item.name}</div>
                    <div className='flex'>
                      <div className=''>{item.price}</div>
                      <div className='pl-2'>USD</div>
                    </div>
                    <div className=''>{item.inventory}</div>
                  </div>
                </div>
                <div>
                  <button className='bg-zinc-700 rounded-xl px-8 py-2 hover:bg-zinc-400' onClick={() => buy(item.id)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default Index;
