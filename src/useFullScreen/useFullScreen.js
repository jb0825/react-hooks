import { useRef } from "react";

/**
 * Full Screen 작동 및 해제시키기
 * 작동할 element 에 reference 를 주면 됨
 * @param {function} callback : Fullscreen, Exit Fullscreen 시 동작시킬 함수
 * @returns
 */
export const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      // 브라우저 호환성
      if (element.current.requestFullscreen) element.current.requestFullscreen(); // Chrome
      else if (element.current.mozRequestFullScreen) element.current.mozRequestFullScreen(); // Firefox
      else if (element.current.webkitRequestFullscreen) element.current.webkitRequestFullscreen(); // Opera
      else if (element.current.msRequestFullscreen) element.current.msRequestFullscreen(); // Microsoft
    }
    if (callback && typeof callback === "function") callback(true);
  };
  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    if (callback && typeof callback === "function") callback(false);
  };
  return { element, triggerFullscreen, exitFullscreen };
};
