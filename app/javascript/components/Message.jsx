import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomMessage } from '../actions/randomMessageAction';

const Message = ({ message, fetchRandomMessage }) => {
  useEffect(() => {
    fetchRandomMessage();
  }, [fetchRandomMessage]);

  return (
    <div>
      <h1>Welcome to My Random Message App!</h1>
      <p>{message}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.randomMessageReducer.message,
  };
};

export default connect(mapStateToProps, { fetchRandomMessage })(Message);
