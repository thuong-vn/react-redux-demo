import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {counterReducer, CounterState} from "./reducers/counter";


// interface định nghĩa AppState (rootReducer)
export interface AppState {
    counter: CounterState,
}

// hàm tạo reducer gốc (gom các reducer con lại và đặt tên)
const rootReducer = combineReducers<AppState>({
    "counter": counterReducer,
});


// tạo store
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;