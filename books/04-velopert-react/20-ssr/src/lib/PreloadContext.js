// 서버사이드 렌더링에서는 useEffect, componentDidMount가 작동하지 않는다.
// 그래서 렌더링하기 전에 미리 API를 요청한 뒤 어딘가에 담아두고 렌더링해야 한다.
import { createContext, useContext } from 'react';

// 서버 환경: { done: false, promises: [] }
const PreloadContext = createContext(null);
export default PreloadContext;

// resolve는 함수 타입
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  // preload 작업이 없거나 끝났다면 null 반환
  if (!preloadContext) return null;
  if (preloadContext.done) return null;

  // 프로미스 배열 등록
  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};

export const usePreloader = (resolve) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;
  preloadContext.promises.push(Promise.resolve(resolve()));
};
