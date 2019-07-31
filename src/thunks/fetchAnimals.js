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


export const thunkDonations = () => {
    return async (dispatch) => {
      try {
        dispatch(isLoading(true));
        const donations = await fetchDonations();
        dispatch(isLoading(false));
        dispatch(setDonations(donations));
      } catch (error) {
        dispatch(gotError(error.message));
      }
    }
  }