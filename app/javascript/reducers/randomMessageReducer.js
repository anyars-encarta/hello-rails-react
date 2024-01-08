const randomMessageReducer = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_RANDOM_MESSAGE':
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };
  
  export default randomMessageReducer;