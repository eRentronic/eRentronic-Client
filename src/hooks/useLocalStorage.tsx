import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, initialState: any) {
  const [value, setValue] = useState(initialState);
  const stringfied = JSON.stringify(value);

  useEffect(() => {
    window.localStorage.setItem(key, stringfied);
  }, [key, stringfied]);

  const getData = () => window.localStorage.getItem(key);

  return { getData, setValue };
}
