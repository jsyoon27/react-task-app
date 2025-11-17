import {useSelector, type TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useTypedSelector: TypedUseSelectorHook< RootState > = useSelector;
export const useTypedDispatch = () => useDispatch< AppDispatch >();


// interface Obj<T> {
//     name: {
//         state: {
//             data: 'abcd',
//             loading: boolean
//         }
//     }
// }

// interface State {
//     state: {
//         data: string,
//         loading: boolean
//     }
// }

// const obj: State = {
//     name: {
//         state: {
//             data: 'abcd',
//             loading: boolean
//         }
//     }
// }