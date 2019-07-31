import { combineReducers } from 'redux';
import { animals, loading, error } from './animalsReducer';
import { donations } from './donationsReducer';

const rootReducer = combineReducers({
  animals,
  loading,
  error,
  donations
});

export default rootReducer;