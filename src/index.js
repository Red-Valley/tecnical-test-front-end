import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store, { saveState } from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class AppRouter extends Component {
	componentDidMount() {
		window.addEventListener('unload', saveState)
	}

	render() {
		return (
			<Provider store={store}>
		        <App/>
			</Provider>
		)
	}
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
