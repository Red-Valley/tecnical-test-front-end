import { combineReducers} from 'redux'
import characters from './charactersReducer'

export default combineReducers({
    charactersReducer: characters
})