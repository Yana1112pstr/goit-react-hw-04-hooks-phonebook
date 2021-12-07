import React from "react";
import PropTypes from "prop-types";
import s from "./Contacts.module.css";

const Contacts = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul>
      {visibleContacts().map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <span className={s.contact}>
            Name:<span className={s.contactItem}>{name}</span>
          </span>
          <span className={s.contact}>
            Number:<span className={s.contactItem}>{number}</span>
          </span>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.button}
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
  visibleContacts: PropTypes.func.isRequired,
};

export default Contacts;
