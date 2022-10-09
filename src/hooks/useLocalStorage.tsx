import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, initialState: any) {
  const [value, setValue] = useState<typeof initialState>(() => {
    let currentValue;
    try {
      const stringfied = JSON.stringify(value);
      currentValue = window.localStorage.getItem(key) || stringfied;
    } catch (err) {
      currentValue = initialState;
    }
    return currentValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return { value, setValue };
}
