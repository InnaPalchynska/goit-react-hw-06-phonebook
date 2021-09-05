import { createSelector } from 'reselect';

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;

// export const getFiltredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filtered) => {
//     console.log([...contacts]);
//     return [...contacts].filter(contact => {
//       return contact.name.toLowerCase().includes(filtered.toLowerCase());
//     });
//   },
// );
