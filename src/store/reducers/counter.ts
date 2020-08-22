import {createReducer} from "@reduxjs/toolkit";
import {incrementAction, setCountAction} from "../actions/counter";


// interface định nghĩa CounterState (counter reducer)
export interface CounterState {
    count: number
}

// giá trị mặc định khi reducer được khởi tạo
const initState = {
    count: 0,
}

// reducer xử lý logic các state theo từng action.
export const counterReducer = createReducer<CounterState>(initState, {
    [incrementAction.type]: (state, action) => {
        return {
            count: state.count + 1,
        }
    },
    [setCountAction.type]: (state, action) => {
        return {
            count: action.payload,
        }
    }
})