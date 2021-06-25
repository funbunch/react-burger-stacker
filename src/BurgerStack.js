import React from 'react'
import Ingredient from './Ingredient'

export default function BurgerStack(props) {
    let burgerIngredients = props.addedIngredients.map((item) => (
        <li>
            <Ingredient ingredient={item.name} color={item.color} />
        </li>
    ))

    return (
        <ul>
            {burgerIngredients.reverse()}
        </ul>
    )
  }