// 파일 이름을 index.js로 하면 디렉토리 이름만 불러오면 자동으로 참조됨
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서
// 스토어는 리듀서를 하나만 사용 가능하므로, 리듀서를 합쳐야 함
const rootReducer = combineReducers({ counter, todos });

export default rootReducer;
