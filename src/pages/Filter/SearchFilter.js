import styles from '../ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/actions';
import getFilter from '../../redux/contacts/selector';
import PropTypes from 'prop-types';

export const Search = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          name="contactName"
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
