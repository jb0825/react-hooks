import { useEffect, useState } from "react";

/**
 * Network 가 바뀔 때 바뀐 status 를 반환하는 Custom Hook
 * @param {function} onChange
 */
export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") onChange(navigator.onLine);
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};
