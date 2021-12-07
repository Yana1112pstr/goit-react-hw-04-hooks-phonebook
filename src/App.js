import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Form from "./components/Form/Form.js";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parse = JSON.parse(contacts);
    if (parse) {
      this.setState({ contacts: parse });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const { contacts } = this.state;
    contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    contacts.filter((contact) => contact.name.includes(filter));
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <Section>
          <h1>Phonebook</h1>
          <Form onSubmit={this.addContact} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter value={this.state.value} changeFilter={this.changeFilter} />
          <Contacts
            visibleContacts={this.visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
