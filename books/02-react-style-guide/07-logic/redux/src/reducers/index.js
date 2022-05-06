import { combineReducers } from 'redux';
import todos from './todosReducer';
import visible from './visibleReducer';

const rootReducer = combineReducers({ todos, visible });

export default rootReducer;
