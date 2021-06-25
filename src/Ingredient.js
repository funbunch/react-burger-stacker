import React from 'react'

export default function Ingredient(props) {
  return (
    <p style={{backgroundColor:props.color}}>
      {props.ingredient}
    </p>
  )

}

