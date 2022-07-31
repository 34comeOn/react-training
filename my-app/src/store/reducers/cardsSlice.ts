import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../../types/card"

import axios from "axios";

function fetchCount(amount = '2016') {
    return axios.request({method: 'GET',
        url: 'https://formula-18.p.rapidapi.com/driverStanding',
        params: {year: amount},
        headers: {
          'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
          'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
        }});

    
  }

export const incrementAsync = createAsyncThunk(
'counter/fetchCount',
async (amount: string) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
}
);



type CardsState = {
    cards: Card[],
    isLoading: boolean,
    error: string,
    myYear: string,
}

const initialState: CardsState = {
    cards: [],
    isLoading: false,
    error: '',
    myYear: '2013',
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        cardsFetching(state) {
            state.isLoading = true;
        },
        cardsFetchingSuccess(state, action: PayloadAction<Card[]> ) {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = '';
        },
        cardsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(incrementAsync.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(incrementAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.myYear = action.payload;
            state.cards = action.payload;
          })
          .addCase(incrementAsync.rejected, (state) => {
            state.isLoading = false;
            
          });
      },
})

// export const selectYear = (state) => state.cards.myYear;
export const cardsReduser = cardsSlice.reducer;
