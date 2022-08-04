import { createSlice } from "@reduxjs/toolkit";

import { CardDetailsTyping } from "../../types/cardDetailsTyping";


type MainState = {
  userStatus: boolean,
  userLogin: string,
  cardDetails: CardDetailsTyping | null,
}

const initialState: MainState = {
  userStatus: false,
  userLogin: 'unknown',
  cardDetails: null,
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
    },
    detailInfo: (state, value) => {
      state.cardDetails = value.payload;
    }
  },
})

export const {logIn, logOut, detailInfo} = mainSlice.actions;

export const mainReduser = mainSlice.reducer;
