import { State } from "../types/state";
import { ActionType, Actions } from '../types/action';

const initialState = {
    favourite: null,
    search: {year: '2019', category: 'race'},
}

const myReducer = (state: State = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionType.AddToFavourite:
            return {...state, favourite: action.payload};
        case ActionType.SearchStats:
            return {...state, search: action.payload};
        default:
            return state;    
    }
}

export {myReducer};