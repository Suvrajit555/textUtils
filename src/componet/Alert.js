import PropTypes from 'prop-types'
import React from 'react'

function Alert(props) {
  const captalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{ height: "50px" }}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captalize(props.alert.type)}</strong>:{props.alert.msg}
        <span aria-hidden="true">&times;</span>
      </div>}
    </div>
  )
}

export default Alert
