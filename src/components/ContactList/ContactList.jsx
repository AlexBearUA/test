import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem name={name} number={number} key={id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
