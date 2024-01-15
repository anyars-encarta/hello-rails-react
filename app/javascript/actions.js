export const fetchRandomMessage = () => {
  return async (dispatch) => {
    
    try {
      const response = await fetch('/api/messages/random');
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      
      dispatch(setRandomMessage(data.message));
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  };
};

export const setRandomMessage = (message) => {
  return {
    type: 'SET_RANDOM_MESSAGE',
    payload: message,
  };
};