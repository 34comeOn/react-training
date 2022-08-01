// import { createAsyncThunk } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import axios from "axios";
import { Card } from "../types/card";

// import { getHeaders } from "./fetchHeaders";

// function fetchData(currentYear = '2019', currentCategory = 'race') {
  
//   return axios.request({method: 'GET',
//     url: `https://formula-18.p.rapidapi.com/${getHeaders(currentCategory)}`,
//     params: currentCategory==='race'? {race: '1', year: currentYear}:{year: currentYear},
//     headers: {
//       'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
//       'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
//     }
//   }); 
// }

// export const getDataAsync = createAsyncThunk(
//   'data/fetchData',
//   async (mydata: {year: string, category: string}) => {
//   const response = await fetchData(mydata.year, mydata.category);

//   return response.data;
// }
// );

export const dataAPI = createApi({
  reducerPath: 'dataAPI',
  baseQuery: fetchBaseQuery({baseUrl:'https://formula-18.p.rapidapi.com'}),
  endpoints: (build) => ({
    fetchMyData: build.query<Card[], string>({
      query: (myyear: string) => ({
        url: '/driverStanding',
        params: {year: myyear},
        headers: {
          'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
          'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
        }
      })
    })
  })
})