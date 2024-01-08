// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../javascript/components/Message';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Message />, document.getElementById('root'));
});