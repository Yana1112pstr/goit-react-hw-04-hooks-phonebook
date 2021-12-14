import React from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

const Contacts = ({ contacts, onDeleteContact }) => {
  const { item, contactItem, button } = s;
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={item}>
          <span className={s.contact}>
            Name:<span className={contactItem}>{name}</span>
          </span>
          <span className={s.contact}>
            Number:<span className={contactItem}>{number}</span>
          </span>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
