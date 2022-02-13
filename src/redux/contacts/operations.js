import { nanoid } from 'nanoid';
import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = '';

const addContact = (name, number) => dispatch => {
  const contact = {
    id: nanoid(),
    name,
    number,
  };

  dispatch(actions.addContactRequest);

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export default { addContact };
