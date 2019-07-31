import { setDonations, isLoading, gotError } from '../actions';

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
        const donations = await fetchDonations();
        dispatch(isLoading(false));
        dispatch(setDonations(donations));
      } catch (error) {
        dispatch(gotError(error.message));
      }
    }
}
