import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { MyRootState, MyAppDispatch } from '../store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<MyAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<MyRootState> = useSelector;
