import React, { useState, useEffect } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Form from "./components/Form/Form.js";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import shortid from "shortid";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const currentContacts = JSON.parse(localStorage.getItem("contacts"));
    if (currentContacts) {
      setContacts(currentContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : setContacts((prevState) => [contact, ...prevState]);
  };

  const deleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const onVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };
  const visibleContacts = onVisibleContacts();

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={changeFilter} />
        <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
      </Section>
    </div>
  );
}

export default App;
