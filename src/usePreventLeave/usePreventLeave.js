/**
 * 닫거나 새로고침할 때 confirm 창을 띄우는 기능
 */
export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // 크롬 브라우저에는 해당 코드를 작성해야 동작함.
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};
