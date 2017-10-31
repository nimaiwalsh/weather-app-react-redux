import { combineReducers } from 'redux';
import Sample1Reducer from './reducer_reducer1';

const rootReducer = combineReducers({
  sample1: Sample1Reducer,
});

export default rootReducer;