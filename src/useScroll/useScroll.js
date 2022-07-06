import { useEffect, useState } from "react";

/**
 * Scroll 발생시 좌표를 리턴하는 Custom Hook
 */
export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    console.log(`x: ${window.scrollX} y: ${window.scrollY}`);
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};
