import { configureStore } from '@reduxjs/toolkit';
import authSReducer from './auth';
import counterReducer from './counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSReducer,
  },
});

export default store;
