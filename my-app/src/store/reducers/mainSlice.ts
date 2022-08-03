import { createSlice } from "@reduxjs/toolkit"


type MainState = {
  userStatus: boolean,
  userLogin: string,
}

const initialState: MainState = {
  userStatus: false,
  userLogin: 'unknown',
}

export const mainSlice = createSlice({
  name: 'mainState',
  initialState,
  reducers: {
    logIn: (state, value) => {
      state.userStatus = true;
      state.userLogin = value.payload;
    },
    logOut: (state) => {
      state.userStatus = false;
    }
  },
})

export const {logIn, logOut} = mainSlice.actions;

export const mainReduser = mainSlice.reducer;
