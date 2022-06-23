import {applyMiddleware,  legacy_createStore as createStore} from 'redux'
import reducer from "../reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";





const store = createStore(reducer,composeWithDevTools(applyMiddleware()))

export default store;