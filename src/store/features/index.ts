import counter from 'src/store/features/counter/counterSlice';
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    counter
})
export default rootReducer