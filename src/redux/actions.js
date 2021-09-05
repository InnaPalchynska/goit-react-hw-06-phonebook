import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phoneBook/addContact');
export const removeContact = createAction('phoneBook/removeContact');
export const filterContact = createAction('phoneBook/filter');
