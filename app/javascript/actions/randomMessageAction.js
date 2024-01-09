import axios from 'axios';

export const fetchRandomMessage = () => {
  return (dispatch) => {
    return axios.get('/api/random_message')
      .then((response) => {
        dispatch({ type: 'FETCH_RANDOM_MESSAGE', payload: response.data.message });
      })
      .catch((error) => {
        throw new Error('Error fetching data:', error);
      });
  };
};