import { useEffect, useState } from 'react';
import type { Vegetables } from '../types';

const API_URL =
  'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';

export function useDataLoad() {
  const [vegetables, setVegetables] = useState<Vegetables[]>([]);
  const [loading, setloading] = useState<boolean>(false);

  const loadPost = async () => {
    try {
      setloading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Ошибка');
      }
      const data = (await response.json()) as Vegetables[];
      setVegetables(data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  return { vegetables, loading };
}
