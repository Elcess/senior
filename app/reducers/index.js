// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';
import busy from './busy';

const initialState = {}

const rootReducer = combineReducers({ campuses, students, busy });

export default rootReducer
