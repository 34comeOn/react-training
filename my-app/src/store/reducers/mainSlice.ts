import { createSlice } from "@reduxjs/toolkit"

// import { getDataAsync } from "../../utils/dataAPI"


type MainState = {
  userStatus: boolean,
}

const initialState: MainState = {
  userStatus: false,
}

export const mainSlice = createSlice({
  name: 'mainState',
  initialState,
  reducers: {
    logIn: (state) => {
      state.userStatus = true;
    },
    logOut: (state) => {
      state.userStatus = false;
    }
  },
})

export const {logIn, logOut} = mainSlice.actions;

export const mainReduser = mainSlice.reducer;
