import { setDonations } from '../actions';

export const fetchDonations = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/donations');
        if (!response.ok) {
            throw new Error('Error fetching donations');
        }
        const donations = await response.json();
        return donations;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const thunkDonations = () => {
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
