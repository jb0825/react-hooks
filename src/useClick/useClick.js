const { useEffect, useRef } = require("react");

/**
 * ComponentDidMount 시 Click 이벤트를 추가하고,
 * ComponentWillUnMount 시 추가한 Click 이벤트를 제거하는 Custom Hook
 * @param {function} onClick : 추가할 onClick 함수
 * @returns : Click 이벤트를 추가할 element Reference
 */
export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") return;

    const current = element.current;

    if (current) current.addEventListener("click", onClick);

    // ComponentWillUnMount 시 호출
    return () => {
      if (current) current.removeEventListener("click", onClick);
    };
  }, []);

  return element;
};
