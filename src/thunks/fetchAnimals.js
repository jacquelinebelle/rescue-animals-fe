import { setAnimals, isLoading, gotError } from '../actions';
import { fetchAnimals } from '../api/fetchAnimals';

export const thunkAnimals = () => {
    return async (dispatch) => {
      try {
        dispatch(isLoading(true));
        const animals = await fetchAnimals();
        dispatch(isLoading(false));
        dispatch(setAnimals(animals));
      } catch (error) {
        dispatch(gotError(error.message));
      }
    }
  }