import { useEffect, useState } from "react";
import defaultAxios from "axios";

/**
 * Axios 요청 관리 Custom Hook
 * refetch 가 실행되면 setTrigger() 가 작동하여 state 의 값을 바꾼다
 * @param {*} options
 * @param {*} axiosInstance
 */
export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!options.url) return;

    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};
