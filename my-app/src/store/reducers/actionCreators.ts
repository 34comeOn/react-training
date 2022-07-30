import axios from "axios";
import { Card } from "../../types/card";
import { MyAppDispatch } from "../store";
import {cardsSlice} from "./cardsSlice";
// import { getResponse } from "../../utils/searchAPI";

export const fetchCards = async (dispatch: MyAppDispatch) => {
    try {
        dispatch(cardsSlice.actions.cardsFetching);
        
        const response = await axios.request<Card[]>({method: 'GET',
        url: 'https://formula-18.p.rapidapi.com/driverStanding',
        params: {year: '2019'},
        headers: {
          'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
          'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
        }});
        dispatch(cardsSlice.actions.cardsFetchingSuccess(response.data));
    } catch(e:any) {
        dispatch(cardsSlice.actions.cardsFetchingError(e.message));
    }
}
