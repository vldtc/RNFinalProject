import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
  announcement: '',
  userDetails: [],
  allUsersDetails: [],
  allMarkers: [],
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
    },
    updateMarkers: (state, action) => {
      state.allMarkers = action.payload;
    },
    updateAllUsers: (state, action) => {
      state.allUsersDetails = action.payload;
    },
  },
});

export const {
  updateLoginState,
  updateAnnouncement,
  updateUserDetails,
  updateAllUsers,
  updateMarkers,
} = loginSlice.actions;

export default loginSlice.reducer;
