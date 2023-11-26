import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  drawerState: false,
  drawerScreens: ['home', 'dash', 'aboutMe', 'people'],
  currentScreen: 'home',
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
