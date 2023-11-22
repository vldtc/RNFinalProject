import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
  announcement: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    updateLoginState: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    updateAnnouncement: (state, action) => {
      state.announcement = action.payload;
    },
  },
});

export const {updateLoginState, updateAnnouncement} = loginSlice.actions;

export default loginSlice.reducer;
