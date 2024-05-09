'use client';

import axios from 'axios';
import Button from '../components/ui/Button';
import { useEffect, useState } from 'react';
import { cn } from '@/config/utils';
import { CartPlus } from '@/assets/icons/CartPlus';
import Pagination from './_components/Pagination';

export default function Home() {
  const onPaginationChange = (currentPage: number) => {
    console.log(currentPage);
  };
  return (
    <main className={cn('p-10')}>
      <Button
        variant='outlined'
        onClick={() => {
          console.log('baodang');
        }}
        className='w-40'
      >
        <CartPlus /> Click me
      </Button>
      <Pagination total={200} pageSize={10} onChange={onPaginationChange} />
    </main>
  );
}
