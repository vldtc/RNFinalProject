import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  drawerState: false,
  drawerScreens: ['Home', 'Dashboard', 'About Me'],
  currentScreen: 'Home',
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: initialState,
  reducers: {
    updateDrawerState: state => {
      state.drawerState = !state.drawerState;
    },
    updateCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
  },
});

export const {updateDrawerState, updateCurrentScreen} = drawerSlice.actions;

export default drawerSlice.reducer;
