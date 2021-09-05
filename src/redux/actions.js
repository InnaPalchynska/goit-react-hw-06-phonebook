import { createAction } from '@reduxjs/toolkit';

// export const addContact = contact => ({
//   type: 'phoneBook/addContact',
//   payload: contact,
// });

// export const removeContact = contact => ({
//   type: 'phoneBook/removeContact',
//   payload: contact,
// });

export const addContact = createAction('phoneBook/addContact');
export const removeContact = createAction('phoneBook/removeContact');
export const filterContact = createAction('phoneBook/filter');
