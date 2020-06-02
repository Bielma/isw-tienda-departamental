import {createStore, combineReducers} from 'redux';
import currentUser from './redux/reducers/currentUser.js';


const reducer = combineReducers({
    currentUser
});
   

const store = createStore(reducer) 

export default store;//createStore(reducer, {user: []});