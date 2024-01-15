import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'; // Combine your reducers
import Message from './Message';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Message} />
            {/* Add more routes if needed */}
          </Switch>
        </Router>
      </Provider>
    );
  };
  
  export default App;
