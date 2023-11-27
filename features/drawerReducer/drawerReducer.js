import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  drawerState: false,
  drawerScreens: ['home', 'dash', 'aboutMe', 'people'],
  currentScreen: 'home',
  isOutsideDrawer: false,
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
    updateIsOutsideDrawer: state => {
      state.isOutsideDrawer = !state.isOutsideDrawer;
    },
  },
});

export const {updateDrawerState, updateCurrentScreen, updateIsOutsideDrawer} =
  drawerSlice.actions;

export default drawerSlice.reducer;
