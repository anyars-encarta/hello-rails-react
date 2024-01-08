// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
    <h1>Random</h1>
      <p>The random message is: <%= @message %></p>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);