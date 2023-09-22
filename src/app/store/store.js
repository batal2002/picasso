import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postAPI} from "../../shared/api/postAPI";

const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
})