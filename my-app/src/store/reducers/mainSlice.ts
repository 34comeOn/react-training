import { createSlice } from "@reduxjs/toolkit";

import { CardDetailsTyping, CardDetailsUndefinedTyping } from "../../types/cardDetailsTyping";


type MainState = {
  userStatus: boolean,
  userLogin: string,
  cardDetails: CardDetailsTyping | null,
  favouriteCards: [CardDetailsTyping | CardDetailsUndefinedTyping],
}

const initialState: MainState = {
  userStatus: false,
  userLogin: 'unknown',
  cardDetails: null,
  favouriteCards: [{}],
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
    },
    favouriteInfo: (state, value) => {
      state.favouriteCards.push(value.payload);
    },

  },
})

export const {logIn, logOut, detailInfo,favouriteInfo} = mainSlice.actions;

export const mainReduser = mainSlice.reducer;
