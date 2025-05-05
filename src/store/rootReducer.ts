import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import settingsReducer from './slices/settingsSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
