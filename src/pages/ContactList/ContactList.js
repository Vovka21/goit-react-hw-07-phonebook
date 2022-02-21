import { useSelector, shallowEqual } from 'react-redux';
import getFilter from '../../redux/contacts/selector';
import { useEffect } from 'react';
import { useFetchContactsQuery } from '../../redux/contacts/contactSlice';
import { toast } from 'react-toastify';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './list.module.css';
import { Spinner } from '../Spinner/Spinner';

export const ContactList = () => {
  const { data: contacts, isFetching, error } = useFetchContactsQuery();
  const filter = useSelector(getFilter, shallowEqual);

  useEffect(() => {
    if (error) toast.error(` Error loading contact `);
  }, [error]);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={styles.contactList}>
      {contacts &&
        filteredContacts().map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      {isFetching && <Spinner height={100} width={100} />}
    </ul>
  );
};
