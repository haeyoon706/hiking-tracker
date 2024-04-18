import {useEffect, useRef} from 'react';

/**
 * 마운트 타이밍을 제외하고 값이 바뀔때마다 useEffect를 실행시키고 싶을 때 사용하는 Hook
 * @param fn 실행할 콜백 함수
 * @param deps 변경에 관여할 의존성 배열
 */
export const useDidUpdateEffect = (fn: () => void, deps: any[]) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }
    didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

/**
 * 마운트 타이밍에만 한 번 실행되는 useEffect를 사용하기 위한 Hook
 * @param fn 실행할 콜백 함수
 */
export const useMountEffect = (fn: () => void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fn, []);
};
