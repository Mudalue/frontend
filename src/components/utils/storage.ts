import { useState, useEffect } from "react";

// Defining the types for key and defaultValue
type StorageKey = string;
type DefaultValue = string | number | boolean | null;

// GETTING STORED VALUE
export const getStorageValue = <T>(key: StorageKey, defaultValue: T): T => {
  const saved = window.localStorage.getItem(key);
  const initial: T = saved ? JSON.parse(saved) : defaultValue;
  return initial;
};

export const useLocalStorage = <T>(
  key: StorageKey,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const clearLocalStorage = (): void => {
  window.localStorage.clear();
  window.location.href = "/";
};
