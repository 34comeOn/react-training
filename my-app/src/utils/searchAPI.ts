import axios from "axios";
// import { useAppSelector } from "../hooks/hooks";

const yearSearch = '2013';

export const getResponse = () =>{ 
    
    return axios.request({method: 'GET',
    url: 'https://formula-18.p.rapidapi.com/driverStanding',
    params: {year: yearSearch},
    headers: {
      'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
      'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
    }});
}