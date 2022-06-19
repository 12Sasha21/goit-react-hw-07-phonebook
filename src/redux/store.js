import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items } from './contacts/contacts-reducer';
import { filter } from './filter/filter-reducer';

const middleware = [...getDefaultMiddleware()];

const rootReducer = combineReducers({
  items,
  filter,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
