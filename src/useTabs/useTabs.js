import { useState } from "react";

/**
 * 탭 변경 기능을 가진 Custom Hook
 * @param {int} initialTab : 탭 번호의 초깃값
 * @param {Array} allTabs : 모든 탭 배열
 */
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) return;

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
    reset: () => setCurrentIndex(initialTab),
  };
};
