import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  drawerState: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: initialState,
  reducers: {
    updateDrawerState: state => {
      state.drawerState = !state.drawerState;
    },
  },
});

export const {updateDrawerState} = drawerSlice.actions;

export default drawerSlice.reducer;
