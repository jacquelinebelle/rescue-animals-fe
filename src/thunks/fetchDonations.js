import { setDonations, isLoading, gotError } from '../actions';
import { fetchDonations } from '../api/fetchDonations';

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
