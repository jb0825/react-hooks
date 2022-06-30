import { useState } from "react";

/**
 * 입력하는 값 반영 및 유효성검사 기능을 가진 Custom Hook
 * @param {*} initialValue : input의 초깃값
 * @param {function} validator : 유효성검사 함수
 */
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    // const value = event.target.value;
    const {
      target: { value },
    } = event;

    if (typeof validator === "function") if (validator(value)) setValue(value);
  };

  return { value, onChange };
};
