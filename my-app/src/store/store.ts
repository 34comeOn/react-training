import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

import { firstReducer } from './reducers/reducer';
import { mainReduser } from './reducers/mainSlice';
import { dataAPI } from '../utils/dataAPI';


const rootReducer = combineReducers({
  first:firstReducer,
  main: mainReduser,
  [dataAPI.reducerPath]: dataAPI.reducer
})


export const setupStore = () => {
  return configureStore( {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(dataAPI.middleware)
    
  })
}

export type MyRootState = ReturnType<typeof rootReducer>;
export type MyAppStore = ReturnType<typeof setupStore>;
export type MyAppDispatch = MyAppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  MyRootState,
  unknown,
  Action<string>
>;
