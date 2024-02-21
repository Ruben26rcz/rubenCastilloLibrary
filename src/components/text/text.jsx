import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  fontFamily: 'Arial, sans-serif'
}

const Text = ({ text }) => {
  return <div styles={styles}>{text}</div>
}

Text.propTypes = {
  text: PropTypes.string
}

export default Text
