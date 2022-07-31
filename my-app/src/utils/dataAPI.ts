import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

function fetchData(currentYear = '2019') {
  return axios.request({method: 'GET',
      url: 'https://formula-18.p.rapidapi.com/driverStanding',
      params: {year: currentYear},
      headers: {
        'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
        'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
      }});

  
}

export const getDataAsync = createAsyncThunk(
'data/fetchData',
async (mydata: {year: string, category: string}) => {
  console.log(mydata.category)
  const response = await fetchData(mydata.year);
  return response.data;
}
);