/**
 * Notification API 를 이용한 브라우저 알림 띄우기
 * https://developer.mozilla.org/ko/docs/Web/API/notification
 * @param {string} title
 * @param {*} options
 */
export const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const triggerNotification = () => {
    if (Notification.permission !== "granted") {
      // Notification 이 허용되지 않았을 때 허용 여부 묻기
      Notification.requestPermission().then((result) => {
        if (result === "granted") new Notification(title, options);
        else return;
      });
    } else {
      new Notification(title, options);
    }
  };

  return triggerNotification;
};
