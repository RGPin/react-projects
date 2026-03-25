import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue = localStorage.getItem(key);

    if (currentValue !== null) {
      try {
        return JSON.parse(currentValue);
      } catch (error) {
        console.error(error);
      }
    }

    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
