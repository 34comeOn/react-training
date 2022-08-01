import { State } from "../../types/state";
import { ActionType, Actions } from '../../types/action';

const initialState = {
    search: {year: '2019', category: 'race'},
}

const firstReducer = (state: State = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionType.SearchStats:
            return {...state, search: action.payload};
        default:
            return state;    
    }
}

export {firstReducer};