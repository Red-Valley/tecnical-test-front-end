import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './config/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


// Middlewares
const middleware = [thunk]
const globalState = localStorage.getItem('GLOBLAL_STATE')
const initialState = globalState ? JSON.parse(globalState) : undefined

const store = createStore(
    reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export const saveState = () => {
	const state = store.getState()
	localStorage.setItem('GLOBLAL_STATE', JSON.stringify(state))
}

export default store