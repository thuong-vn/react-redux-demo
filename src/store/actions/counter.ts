import {createAction} from "@reduxjs/toolkit";

// action
// Bản chất action bê redux chỉ là hàm để định nghĩa object bao gồm:
// {
//    type: "TYPE_A",
//    payload: 10, // giá do người dùng gửi vào để cập nhật lại state.
// }
export const incrementAction = createAction("COUNTER_INCREMENT")
export const setCountAction = createAction<number>("SET_COUNT")
