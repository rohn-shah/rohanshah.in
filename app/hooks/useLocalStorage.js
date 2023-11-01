import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Create state variable to store
  // localStorage value in state
  const [localStorageValue, setLocalStorageValue] = useState(null);

  useEffect(() => {
    // Perform localStorage action
    let initialValue = "";

    if (typeof window !== "undefined") {
      try {
        const value = localStorage.getItem(key);

        if (value) {
          initialValue = JSON.parse(value);
        } else {
          localStorage.setItem(key, JSON.stringify(defaultValue));
          initialValue = defaultValue;
        }
      } catch (error) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        initialValue = defaultValue;
      } finally {
        setLocalStorageValue(initialValue);
      }
    }
  }, []);

  // this method update our localStorage and our state
  const setLocalStorageStateValue = (valueOrFn) => {
    let newValue;
    if (typeof valueOrFn === "function") {
      const fn = valueOrFn;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };
  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
