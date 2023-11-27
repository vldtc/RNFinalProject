import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
  announcement: '',
  userDetails: [],
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
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload;
      console.log('Hello user', state.userDetails);
    },
  },
});

export const {updateLoginState, updateAnnouncement, updateUserDetails} =
  loginSlice.actions;

export default loginSlice.reducer;
