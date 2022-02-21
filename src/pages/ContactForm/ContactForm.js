import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactSlice';
import { Spinner } from '../Spinner/Spinner';
import styles from './ContactForm.module.css';

export const CreateContactPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedContact = name.toLowerCase();
    const duplicateName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedContact
    );

    if (duplicateName) {
      toast.error(`${name} is already in contact list`);
      resetForm();
      return;
    }

    createContact(name, phone);
    toast.success(`${name} is added to the contact list!`);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
          />
        </label>{' '}
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={styles.input}
          />
        </label>
        <button type="submit" disabled={isLoading} className={styles.button}>
          {isLoading && <Spinner size={12} />}
          Add contact
        </button>
      </form>
    </>
  );
};
