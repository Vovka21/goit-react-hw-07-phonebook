import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
import { Spinner } from '../Spinner/Spinner';
import styles from '../ContactList/list.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const { name, phone, id } = contact;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={styles.contactItem}>
      {name}: {phone}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        className={styles.button}
      >
        {isDeleting && <Spinner size={12} />}
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
