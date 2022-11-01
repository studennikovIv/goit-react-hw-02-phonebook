import React, { Component } from 'react'
// import css from './renderForm.css'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

class AddContact extends Component {
  state = {
    name: '',
    number: '',
    id: nanoid(3),
  }

  inputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  submiteForm = (event) => {
    event.preventDefault()
    const { name, number, id } = this.state

    this.props.addContacts(name, number, id)
    this.setState({ name: '', number: '', id: '' })
  }

  render() {
    return (
      <form onSubmit={this.submiteForm}>
        <label>
          Name
          <input
            onChange={this.inputChange}
            id="1"
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.inputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
  }
}
AddContact.propTypes = {
  addContacts: PropTypes.func,
}
export default AddContact
