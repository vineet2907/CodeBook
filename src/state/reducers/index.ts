import cellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  cells: cellsReducer,
  bundels: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
