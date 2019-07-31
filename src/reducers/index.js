import { combineReducers } from 'redux';
import { animals, loading, error } from './animalsReducer';

const rootReducer = combineReducers({
  animals,
  loading,
  error
});

export default rootReducer;