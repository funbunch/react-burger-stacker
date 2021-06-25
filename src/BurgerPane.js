import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default function BurgerPane(props) {
  return( 
    <div>
      <BurgerStack addedIngredients={props.addedIngredients} />
      <ClearBurger clearBurger={props.clearBurger} />
    </div>

  )
}
