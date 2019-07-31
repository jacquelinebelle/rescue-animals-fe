import { combineReducers } from 'redux';
import { animals } from './animalsReducer';

const rootReducer = combineReducers({
  animals
});

export default rootReducer;