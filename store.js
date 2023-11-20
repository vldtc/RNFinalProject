import {configureStore} from '@reduxjs/toolkit';
import drawerReducer from './features/drawerReducer/drawerReducer';

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});
