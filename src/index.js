import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
// import App from './App';
import Top from './components/top';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <App />,
  <Top />,
  document.getElementById('root'));
registerServiceWorker();
