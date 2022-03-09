import authReducer from "./authReducers";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    //sync data with database data
    firestore: firestoreReducer,
});

export default rootReducer;