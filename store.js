import {configureStore} from '@reduxjs/toolkit';
import drawerReducer from './features/drawerReducer/drawerReducer';
import loginReducer from './features/loginReducer/loginReducer';

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    login: loginReducer,
  },
});
