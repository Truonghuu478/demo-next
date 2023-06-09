import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./features"
import thunk from "redux-thunk"


const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(thunk)
    ,
    devTools: process.env.NODE_ENV !== 'production', // chỉ bật devtools trong môi trường development
})


//  Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
//  Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

