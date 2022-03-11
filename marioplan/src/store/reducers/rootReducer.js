import authReducer from "./authReducers";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer} from 'react-redux-firebase';
import notifReducer from "./notifReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    notif: notifReducer,
    //sync data with database data
    firestore: firestoreReducer,
    //sync data with auth data
    firebase: firebaseReducer,
});

export default rootReducer;