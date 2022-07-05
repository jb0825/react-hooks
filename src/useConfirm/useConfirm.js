/**
 * confirm 여부에 따라 onConfirm, onCancle 함수를 발생시킴
 * @param {string} message
 * @param {function} onConfirm
 * @param {function} onCancle
 */

export const useConfirm = (message = "", onConfirm, onCancle) => {
  // onConfirm 이 존재하지 않으면서 함수가 아닐 때,
  // onCancle 이 존재하면서 함수가 아닐 때 (onCancle 은 있어도 되고 없어도 됨)
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (onCancle && typeof onCancle !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) onConfirm();
    else onCancle();
  };

  return confirmAction;
};
