import React from 'react'
import css from './renderContact.module.css'
import PropTypes from 'prop-types'

const ContactList = ({ nameArr, onClick }) =>
  nameArr.map(({ contact, number, id }) => (
    <li className={css.contactElement} id={id} key={id}>
      <span className={css.span__name}>Name:{contact}</span>
      <span className={css.span__number}>Number:{number}</span>
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  ))

ContactList.propTypes = {
  nameArr: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.any.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
}
export default ContactList
