import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Component/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('main'));
serviceWorker.unregister();
