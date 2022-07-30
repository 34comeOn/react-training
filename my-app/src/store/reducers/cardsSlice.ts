import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../../types/card"

type CardsState = {
    cards: Card[],
    isLoading: boolean,
    error: string,
}

const initialState: CardsState = {
    cards: [],
    isLoading: false,
    error: '',
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
})
export const cardsReduser = cardsSlice.reducer;
