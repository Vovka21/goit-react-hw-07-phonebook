import { Toaster } from 'react-hot-toast';
// import { Routes, Route } from 'react-router-dom';
import { ContactsPage } from '../pages/Contacts/Contacts';
import { CreateContactPage } from '../pages/ContactForm/ContactForm';
import { Search } from '../pages/Filter/SearchFilter';
import './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <CreateContactPage />
        <h2 className="title-contacts">Contacts</h2>
        <ContactsPage />
        <Search />
      </div>
      <Toaster position="top-right" />
    </>
  );
};
