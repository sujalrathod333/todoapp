import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice';
import taskSlice from '../features/TaskSlice';

export const store = configureStore({
    reducer:{
     counter: counterSlice,
     task: taskSlice,
    }
});
