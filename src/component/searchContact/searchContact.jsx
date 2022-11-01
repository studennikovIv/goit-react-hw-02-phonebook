import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ onChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="name" onChange={onChange} />
    </label>
  )
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}
export default Filter
