import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id }) => {
  return (
    <li className={css.ContactListItem} key={id}>
      <p>
        {name}: {number}
      </p>
      <button>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
