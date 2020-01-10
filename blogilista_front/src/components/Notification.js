import React from 'react'

const Notification = (props) => {

  const successMessageStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  const errorMessageStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  if(props.notification !== null) {
    if(props.style === 'successStyle') {
        return (
            <div>
                <div style={successMessageStyle}>
                    {props.notification}
                </div>
            </div>
        )
    }
    if(props.style === 'errorStyle') {
        return (
        <div>
            <div style={errorMessageStyle}>
                {props.notification}
            </div>
        </div>
        )
    }
  } else {
    return null
  }
}

export default Notification