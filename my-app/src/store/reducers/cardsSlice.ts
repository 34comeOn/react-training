import { createSlice } from "@reduxjs/toolkit"
import { Card } from "../../types/card"

// import { getDataAsync } from "../../utils/dataAPI"


type CardsState = {
  cards: Card[],
  isLoading: boolean,
  error: string,
  search: {year: string, category: string}
}

const initialState: CardsState = {
  cards: [],
  isLoading: false,
  error: '',
  search: {year: '2019', category: 'race'}
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
  },
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(getDataAsync.pending, (state) => {
  //     state.isLoading = true;
  //   })
  //   .addCase(getDataAsync.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.search = action.payload;
  //     state.cards = action.payload;
  //   })
  //   .addCase(getDataAsync.rejected, (state) => {
  //     state.isLoading = false;
        
  //   });
  // },
})

export const cardsReduser = cardsSlice.reducer;
