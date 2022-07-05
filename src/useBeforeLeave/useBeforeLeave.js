import { useEffect } from "react";

/**
 * 마우스가 탭을 벗어났을 때 이벤트를 발생시키는 Custom Hook
 * @param {function} onBefore
 */
export const useBeforeLeave = (onBefore) => {
  const handleMouseLeave = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };

  useEffect(() => {
    if (typeof onBefore !== "function") return;

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);
};
