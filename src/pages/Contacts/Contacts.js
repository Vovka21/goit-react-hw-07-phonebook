// import { Link } from 'react-router-dom';
import { useFetchContactsQuery } from '../../redux/contacts/contactSlice';
import { ContactList } from '../ContactList/ContactList';
import { Spinner } from '../Spinner/Spinner';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <div>
      {isFetching && <Spinner />}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};
