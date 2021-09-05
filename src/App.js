import { useState, useEffect, useMemo } from 'react';

import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const getContactsFromLocalStorage = () => {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   return parsedContacts;
// };

export default function App() {
  // const [contacts, setContacts] = useState(
  //   () => getContactsFromLocalStorage() ?? initialState,
  // );
  // const [contactFilter, setContactFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
