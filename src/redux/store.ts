import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch