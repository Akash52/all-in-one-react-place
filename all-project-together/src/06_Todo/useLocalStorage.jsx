import { useState, useEffect } from 'react';

function getLocalStorageValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key) || '{}');
  if (!localStorage.getItem(key)) {
    if (initialValue instanceof Function) {
      return initialValue();
    }
    return initialValue;
  } else {
    return savedValue;
  }
}

export default function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [value, key]
  );

  return [value, setValue];
}
