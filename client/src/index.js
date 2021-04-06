import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/views/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
// import App from 'views/App'
// import store from 'redux/rootStore'

// import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'react-datepicker/dist/react-datepicker.css'
// import './index.css'

// require('dotenv').config()

// render(
// 	<Provider store={store}>
// 		<Router>
// 			<App />
// 		</Router>
// 	</Provider>
// 	,document.getElementById('root')
// )