import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Greeting from './greeting';

const App = () => {
    return (
      <Provider store={store}>
        <Greeting />
      </Provider>
    );
};

export default App;
