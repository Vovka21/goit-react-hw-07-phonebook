import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

// const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// }));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/change-filter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  // addContact,
  deleteContact,
  changeFilter,
};
