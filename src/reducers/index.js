import { combineReducers } from 'redux';

// Import all my reducers
import loginReducer from "./loginReducer";
import backupReducer from "./backupReducer";

export default combineReducers({
    login: loginReducer,
    backups: backupReducer,
});
