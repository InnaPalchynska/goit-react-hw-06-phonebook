import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { removeContact } from '../../redux/actions';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const dispatch = useDispatch();
  if (filteredContacts.length === 0) return null;
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={id => dispatch(removeContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
