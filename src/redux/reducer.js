import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, removeContact, filterContact } from './actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

const items = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filter = createReducer('', {
  [filterContact]: (state, action) => {
    return action.payload;
  },
});

export default combineReducers({ items, filter });
