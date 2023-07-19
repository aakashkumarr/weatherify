
import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from '../features/weather/weatherSlice'
import IPReducer from '../features/ip/IPSlice'
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
    reducer:{
        weather:WeatherReducer,
        ip:IPReducer,
        theme:themeReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch