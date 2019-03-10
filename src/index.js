import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { TodoProvider } from './context';

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// https://www.youtube.com/watch?v=-edmQKcOW8s&t=680s&fbclid=IwAR0cDvRcI7zCs4_YKeMqy6ugl8RpTcuYrjNnNthjAzx7bnSWcTZBnmdpKpQ

serviceWorker.unregister();
