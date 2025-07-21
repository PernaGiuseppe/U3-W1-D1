import { Component } from 'react'
const Button = (props) => {
  const buttonColor = {
    backgroundColor: props.color,
  }
  return (
    <button className="margin" style={buttonColor}>
      {props.content}
    </button>
  )
}
export default Button
