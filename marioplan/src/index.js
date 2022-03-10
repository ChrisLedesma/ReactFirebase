import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";

const store = createStore(
  rootReducer,
  //combine all store enhancers
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    //pass firebase database details for connection
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
      attachAuthIsReady: true,
      firebaseStateName: "firebase",
    })
  )
);
//wait for auth to load before rendering everything else
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();
});
