import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const getStoredValue = async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue; // Set initial value if no data is found
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoredValue(); // Fetch stored value on component mount
  }, []);

  const setValue = async (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return { storedValue, setValue, getStoredValue };
};
