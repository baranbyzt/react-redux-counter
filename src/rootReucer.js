

import Reducer from './Reducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({

    myCounter: Reducer

})

export default rootReducer