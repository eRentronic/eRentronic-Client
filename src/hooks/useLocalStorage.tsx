import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, initialState?: any) {
  const [value, setValue] = useState<typeof initialState>(
    () => JSON.parse(window.localStorage.getItem(key)!) || initialState,
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue };
}
