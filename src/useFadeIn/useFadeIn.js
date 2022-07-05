import { useEffect, useRef } from "react";

/**
 * JS 로 Fade In 효과를 주는 Custom Hook
 * @param {number} duration
 * @param {number} delay
 */
export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (typeof (duration || delay) !== "number") return;

    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};
