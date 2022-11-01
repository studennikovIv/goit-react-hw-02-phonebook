import React, { Component } from 'react'
import Filter from './searchContact/searchContact'
import RenderForm from './renderForm/renderForm'
import ContactList from './renderContact/renderContact'
import './App.css'

class App extends Component {
  state = {
    contacts: [
      { id: '1', contact: 'Яна', number: '123123' },

      { id: '2', contact: 'Илья', number: '09547177553' },

      { id: '3', contact: 'Денис', number: '1654651321' },

      { id: '4', contact: 'Настя', number: '355332225' },
    ],

    filter: '',
  }

  addContacts = (contact, number, id) => {
    const contactArr = { contact, number, id }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactArr],
    }))
  }

  filterChange = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter((contact) => {
      return contact.contact
        .toLowerCase()
        .includes(this.state.filter.toLowerCase())
    })

    return filterContactsList
  }

  deletContact = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== e),
    }))
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <RenderForm addContacts={this.addContacts} />
        <h2>Contacts</h2>

        <Filter value="filter" onChange={this.filterChange} />
        <ul>
          <ContactList
            onClick={this.deletContact}
            nameArr={
              this.state.filter.length !== 0
                ? this.getFilteredContacts()
                : this.state.contacts
            }
          />
        </ul>
      </>
    )
  }
}

export default App
