import { useEffect, useState } from "react";

/**
 * title 이 바뀔 때마다 브라우저의 title 을 바꿔주는 Custom Hook
 * @param {*} initialTitle : title 의 초깃값
 */
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    document.querySelector("title").innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};
