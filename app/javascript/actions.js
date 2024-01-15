export const fetchRandomMessage = () => {
  return async (dispatch) => {
    console.log('Fetching random message...');

    try {
      const response = await fetch('/api/messages/random');
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Received response:', data);

      dispatch(setRandomMessage(data.message));
    } catch (error) {
      console.error('Error fetching random message:', error);
    }
  };
};

export const setRandomMessage = (message) => {
  return {
    type: 'SET_RANDOM_MESSAGE',
    payload: message,
  };
};