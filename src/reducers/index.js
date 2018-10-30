import { combineReducers } from 'redux';

// Import all my reducers
import loginReducer from "./loginReducer";

export default combineReducers({
    login: loginReducer,
});
