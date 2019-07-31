import { setAnimals, isLoading, gotError } from '../actions';


export const fetchAnimals = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/rescue-animals');
        if (!response.ok) {
            throw new Error('Error fetching animals');
        }
        const animals = await response.json();
        return animals;
    } catch (error) {
        throw new Error(error.message);
    }
}


export const thunkAnimals = () => {
    return async (dispatch) => {
      try {
        dispatch(isLoading(true));
        const animals = await fetchAnimals('http://localhost:3001/api/v1/rescue-animals');
        dispatch(isLoading(false));
        dispatch(setAnimals(animals));
      } catch (error) {
        dispatch(gotError(error.message));
      }
    }
  }