import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import BookReducer from "../Reducer/BookReducer";
// This import come from npm redux dev tool extension helper 
import { composeWithDevTools } from 'redux-devtools-extension';

// costume middleware 
// function exampleMiddleware(storeAPI) {
//     return function wrapDispatch(next) {
//       return function handleAction(action) {
//         // console.log('action dispatch', action);
//         return next(action)
//       }
//     }
//   }

// When i have lots of reducer components then combine 
const rootReducer = combineReducers({
    books : BookReducer
})

// middleware library example redux SAGA redux THUNK
// If need costume middleware add (thunk, exampleMiddleware)
// middleware for get data from api
const middleware = applyMiddleware(thunk)

export const store = createStore(rootReducer,composeWithDevTools(middleware))