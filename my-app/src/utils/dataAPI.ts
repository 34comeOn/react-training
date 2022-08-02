import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RaceCard, PilotCard } from "../types/card";

export const dataAPI = createApi({
  reducerPath: 'dataAPI',
  baseQuery: fetchBaseQuery({baseUrl:'https://formula-18.p.rapidapi.com'}),
  endpoints: (build) => ({
    fetchPilot: build.query<PilotCard[], string>({
      query: (myYear) => ({
        url: '/driverStanding',
        params: {year: myYear},
        headers: {
          'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
          'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
        }
      })
    }),
    fetchRace: build.query<RaceCard[], string>({
      query: (myYear) => ({
        url: '/race',
        params: {year: myYear},
        headers: {
          'X-RapidAPI-Key': '2f2d49651cmsh722c2e352245ab7p18b115jsn240c8d3c8935',
          'X-RapidAPI-Host': 'formula-18.p.rapidapi.com'
        }
      })
    }),
  })
})